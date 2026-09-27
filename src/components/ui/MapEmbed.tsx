"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

interface MapEmbedProps {
  src: string | undefined;
  title: string;
}

export default function MapEmbed({ src, title }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 animate-pulse bg-gold-100"
        >
          <div className="absolute inset-0 bg-linear-to-br from-gold-100 via-gold-50/40 to-gold-200/60" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-olive-500/15 p-4">
            <MapPin className="h-7 w-7 text-olive-500/70" strokeWidth={1.5} />
          </div>
          <div className="absolute bottom-4 left-4 h-2 w-24 rounded-full bg-gold-200/70" />
          <div className="absolute bottom-4 right-4 h-2 w-12 rounded-full bg-gold-200/70" />
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="relative z-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
