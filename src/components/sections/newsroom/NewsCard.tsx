import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/lib/newsroom";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="flex h-full flex-col">
      <Link
        href={`/newsroom/${article.slug}`}
        className="block overflow-hidden rounded-md"
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <h3 className="mt-4 text-base font-semibold text-black">
        <Link href={`/newsroom/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-neutral-500">
        {article.excerpt}
      </p>
      <ArrowLink href={`/newsroom/${article.slug}`} className="mt-auto pt-5">
        Read More
      </ArrowLink>
    </article>
  );
}
