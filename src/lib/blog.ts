import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(BLOG_DIR, fileName);
    const rawFile = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(rawFile);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      category: String(data.category ?? "Đời sống"),
      excerpt: String(data.excerpt ?? ""),
      coverImage: String(data.coverImage ?? "/images/album-saigon-morning.jpg"),
      readingTime: String(data.readingTime ?? "4 phút đọc"),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`];

  for (const fileName of candidates) {
    const fullPath = path.join(BLOG_DIR, fileName);
    if (fs.existsSync(fullPath)) {
      const rawFile = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(rawFile);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        category: String(data.category ?? "Đời sống"),
        excerpt: String(data.excerpt ?? ""),
        coverImage: String(data.coverImage ?? "/images/album-saigon-morning.jpg"),
        readingTime: String(data.readingTime ?? "4 phút đọc"),
        content,
      };
    }
  }

  return null;
}

export function formatVietnameseDate(isoDate: string): string {
  if (!isoDate) return "";
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}
