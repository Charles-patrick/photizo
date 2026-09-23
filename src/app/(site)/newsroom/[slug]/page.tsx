import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getRelatedArticles } from "@/lib/newsroom";
import NewsCard from "@/components/sections/newsroom/NewsCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Photizo Properties`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 pb-10 pt-24 lg:pt-26">
      <nav className="mb-4 text-sm text-neutral-500">
        <Link href="/newsroom" className="hover:underline">
          Newsroom
        </Link>{" "}
        &gt;&gt; <span className="text-orange-500">{article.title}</span>
      </nav>

      <h1 className="text-3xl font-semibold text-black">{article.title}</h1>

      <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500">
        <span>{article.readTime}</span>
        <span aria-hidden>·</span>
        <span>Uploaded {formatRelativeDate(article.uploadedAt)}</span>
      </div>

      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral mt-8 max-w-none">
        <MDXRemote source={article.content} />
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Other Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function formatRelativeDate(dateString: string) {
  const date = new Date(dateString);
  const days = Math.floor(
    (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (days === 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}
