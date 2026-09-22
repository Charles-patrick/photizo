import { getAllArticles } from "@/lib/newsroom";
import { mediaItems } from "@/content/newsroom/media";
import NewsroomTabs from "./NewsroomTabs";

export default function Newsroom() {
  const articles = getAllArticles();

  return <NewsroomTabs articles={articles} media={mediaItems} />;
}
