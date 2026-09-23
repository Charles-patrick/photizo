import Image from "next/image";
import type { MediaItem } from "@/content/newsroom/media";

export default function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative aspect-4/3 w-full overflow-hidden rounded-md"
        >
          <Image
            src={item.image}
            alt={item.caption ?? "Photizo Properties media"}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/35 to-transparent px-4 pb-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm leading-relaxed text-white">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
