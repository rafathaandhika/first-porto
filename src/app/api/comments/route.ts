import { NextResponse, connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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
    const body = (await request.json()) as { name?: string; text?: string };
    const cleanName = (body.name || "").trim().slice(0, 60);
    const cleanText = (body.text || "").trim().slice(0, 500);

    if (!cleanName || !cleanText) {
      return NextResponse.json(
        { error: "Nama dan komentar tidak boleh kosong." },
        { status: 400 }
      );
    }

    const { comments } = await readComments();
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
    const others = comments.filter((c) => !c.isPinned);
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
