import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rafathaandhika.vercel.app",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://rafathaandhika.vercel.app/cv.pdf",
      lastModified: "2026-11-27",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
