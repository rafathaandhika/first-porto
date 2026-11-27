import { NextResponse, connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export interface CommentItem {
  id: string;
  name: string;
  text: string;
  time: string;
  createdAt?: string;
  likes: number;
  isPinned?: boolean;
}

const REDIS_KEY = "portfolio_guestbook_comments_v1";
const DEV_STORE_PATH = path.join(process.cwd(), ".next", "guestbook-comments.json");
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_SEC = 600; // 10 minutes
const MAX_STORED_COMMENTS = 50;
const localRateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "local";
}

async function isRateLimited(ip: string): Promise<boolean> {
  const ipHash = crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);
  const redis = getRedisConfig();

  if (redis) {
    try {
      const rateKey = `portfolio_ratelimit:comment:${ipHash}`;
      const res = await fetch(`${redis.url}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redis.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", rateKey],
          ["EXPIRE", rateKey, RATE_LIMIT_WINDOW_SEC, "NX"],
        ]),
        cache: "no-store",
      });
      if (res.ok) {
        const results = (await res.json()) as { result?: number }[];
        const count = Number(results?.[0]?.result ?? 1);
        return count > RATE_LIMIT_MAX;
      }
    } catch {
      // Fallback to in-memory limiter if Redis pipeline fails transiently
    }
  }

  const now = Date.now();
  const entry = localRateLimitMap.get(ipHash);
  if (!entry || entry.resetAt <= now) {
    localRateLimitMap.set(ipHash, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_SEC * 1000,
    });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

const DEFAULT_COMMENTS: CommentItem[] = [
  {
    id: "pin-1",
    name: "Rafatha Andhika",
    text: "Terima kasih sudah mampir ke portofolio saya! Jangan ragu untuk hubungi saya jika ada proyek atau diskusi seputar Odoo & Python.",
    time: "Pinned",
    likes: 12,
    isPinned: true,
  },
  {
    id: "guest-1",
    name: "Rizky Pratama",
    text: "Portofolionya keren bro, clean banget tampilannya!",
    time: "2 hari lalu",
    likes: 4,
  },
  {
    id: "guest-2",
    name: "Alex M.",
    text: "Impressive Odoo modules. Let's connect on LinkedIn!",
    time: "1 minggu lalu",
    likes: 7,
  },
];

function getRedisConfig(): { url: string; token: string } | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.REDIS_REST_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.REDIS_REST_TOKEN;

  if (url && token) {
    return { url: url.replace(/\/$/, ""), token };
  }
  return null;
}

async function readComments(): Promise<{ comments: CommentItem[]; persistent: boolean }> {
  const redis = getRedisConfig();

  if (redis) {
    const res = await fetch(`${redis.url}/get/${REDIS_KEY}`, {
      headers: { Authorization: `Bearer ${redis.token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Redis GET failed: ${res.status}`);
    }

    const data = (await res.json()) as { result?: string | null };
    if (data.result) {
      try {
        const parsed = JSON.parse(data.result);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return { comments: parsed, persistent: true };
        }
      } catch {
        // Fallback to default if corrupted
      }
    }

    return { comments: DEFAULT_COMMENTS, persistent: true };
  }

  // Local dev file fallback so testing works without Redis env vars
  if (process.env.NODE_ENV === "development") {
    try {
      const raw = await fs.readFile(DEV_STORE_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return { comments: parsed, persistent: true };
      }
    } catch {
      // File not created yet
    }
    return { comments: DEFAULT_COMMENTS, persistent: true };
  }

  return { comments: DEFAULT_COMMENTS, persistent: false };
}

async function writeComments(comments: CommentItem[]): Promise<boolean> {
  const redis = getRedisConfig();

  if (redis) {
    const res = await fetch(redis.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redis.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["SET", REDIS_KEY, JSON.stringify(comments)]),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Redis SET failed: ${res.status}`);
    }
    return true;
  }

  if (process.env.NODE_ENV === "development") {
    await fs.mkdir(path.dirname(DEV_STORE_PATH), { recursive: true });
    await fs.writeFile(DEV_STORE_PATH, JSON.stringify(comments, null, 2), "utf-8");
    return true;
  }

  return false;
}

export async function GET() {
  await connection();
  try {
    const result = await readComments();
    return NextResponse.json(result, {
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (error) {
    console.error("GET /api/comments error:", error);
    return NextResponse.json(
      { comments: DEFAULT_COMMENTS, persistent: false },
      { status: 200, headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      text?: string;
      website?: string;
    };

    // Silent/hard reject honeypot bots
    if (typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json(
        { error: "Permintaan tidak valid." },
        { status: 400 }
      );
    }

    const cleanName = (body.name || "").trim().replace(/\s+/g, " ").slice(0, 60);
    const cleanText = (body.text || "").trim().slice(0, 500);

    if (cleanName.length < 2 || cleanText.length < 3) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter dan komentar minimal 3 karakter." },
        { status: 400 }
      );
    }

    const urlMatches = cleanText.match(/https?:\/\/|www\./gi);
    if (urlMatches && urlMatches.length > 1) {
      return NextResponse.json(
        { error: "Komentar tidak boleh mengandung lebih dari 1 tautan." },
        { status: 400 }
      );
    }

    if (await isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Terlalu banyak komentar dikirim. Tunggu beberapa menit sebelum mencoba lagi." },
        { status: 429 }
      );
    }

    const { comments } = await readComments();
    const isDuplicate = comments
      .filter((c) => !c.isPinned)
      .slice(0, 5)
      .some(
        (c) =>
          c.name.trim().toLowerCase() === cleanName.toLowerCase() &&
          c.text.trim().toLowerCase() === cleanText.toLowerCase()
      );
    if (isDuplicate) {
      return NextResponse.json(
        { error: "Komentar yang sama sudah dikirim baru-baru ini." },
        { status: 409 }
      );
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newComment: CommentItem = {
      id: `comm-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      name: cleanName,
      text: cleanText,
      time: formattedDate,
      createdAt: now.toISOString(),
      likes: 0,
    };

    const pinned = comments.filter((c) => c.isPinned);
    const others = comments.filter((c) => !c.isPinned).slice(0, MAX_STORED_COMMENTS - 1);
    const updated = [...pinned, newComment, ...others];

    const saved = await writeComments(updated);
    return NextResponse.json({ comment: newComment, comments: updated, persistent: saved });
  } catch (error) {
    console.error("POST /api/comments error:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan komentar ke server." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = (await request.json()) as { id?: string };
    if (!body.id) {
      return NextResponse.json({ error: "Missing comment id" }, { status: 400 });
    }

    const { comments } = await readComments();
    const updated = comments.map((c) =>
      c.id === body.id ? { ...c, likes: c.likes + 1 } : c
    );

    const saved = await writeComments(updated);
    return NextResponse.json({ comments: updated, persistent: saved });
  } catch (error) {
    console.error("PATCH /api/comments error:", error);
    return NextResponse.json(
      { error: "Gagal memperbarui like." },
      { status: 500 }
    );
  }
}
