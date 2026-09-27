"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NewsArticle } from "@/lib/newsroom";
import type { MediaItem } from "@/content/newsroom/media";
import NewsCard from "./NewsCard";
import MediaGrid from "./MediaGrid";

type Tab = "news" | "media";
type SortOrder = "recent" | "oldest";

export default function NewsroomTabs({
  articles,
  media,
}: {
  articles: NewsArticle[];
  media: MediaItem[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("news");
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("recent");

  const filteredArticles = useMemo(() => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
    return filtered.sort((a, b) => {
      const diff =
        new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime();
      return sortOrder === "recent" ? diff : -diff;
    });
  }, [articles, query, sortOrder]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {/* Search + sort bar */}
      <div className="mb-8 flex flex-col gap-3 rounded-md border border-neutral-700 bg-olive-500 p-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 border-b border-neutral-600 pb-1 sm:border-b-0">
          <svg
            className="h-4 w-4 text-gold-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, or keyword"
            className="w-full bg-transparent text-sm text-gold-200 placeholder:text-gold-200 focus:outline-none"
          />
        </div>

        <div className="relative shrink-0">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="w-full appearance-none rounded border border-gold-200 bg-olive-500 px-3 py-2 pr-6 text-sm text-gold-200 focus:outline-none"
          >
            <option value="recent" className="bg-olive-500 text-gold-200">
              Recently Uploaded
            </option>
            <option value="oldest" className="bg-olive-500 text-gold-200">
              Oldest First
            </option>
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-200 "
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex w-full border-b border-neutral-200">
        <div className="flex w-1/2">
          <button
            type="button"
            onClick={() => setActiveTab("news")}
            className={`w-full border-b-2 pb-3 text-sm font-medium ${
              activeTab === "news"
                ? "border-b border-ember-500 text-black"
                : "border-transparent text-neutral-400"
            }`}
          >
            News & Updates
          </button>
        </div>
        <div className="flex w-1/2">
          <button
            type="button"
            onClick={() => setActiveTab("media")}
            className={`w-full border-b-2 pb-3 text-sm font-medium ${
              activeTab === "media"
                ? "border-b border-ember-500 text-black"
                : "border-transparent text-neutral-400"
            }`}
          >
            Media
          </button>
        </div>
      </div>

      {activeTab === "news" ? (
        filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-neutral-500">
            No articles match your search.
          </p>
        )
      ) : (
        <MediaGrid items={media} />
      )}
    </section>
  );
}
