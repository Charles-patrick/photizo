import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NEWS_DIR = path.join(process.cwd(), "src", "content", "newsroom", "news");

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  readTime: string;
  uploadedAt: string; // ISO date string, e.g. "2026-08-25"
  content: string; // raw MDX body, rendered later
};

export function getAllArticles(): NewsArticle[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(NEWS_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      readTime: data.readTime,
      uploadedAt: data.uploadedAt,
      content,
    } as NewsArticle;
  });

  return articles.sort(
    (a, b) =>
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): NewsArticle | null {
  const filePath = path.join(NEWS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    readTime: data.readTime,
    uploadedAt: data.uploadedAt,
    content,
  };
}

export function getRelatedArticles(
  currentSlug: string,
  limit = 3,
): NewsArticle[] {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug)
    .slice(0, limit);
}
