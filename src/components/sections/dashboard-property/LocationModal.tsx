"use client";

import Modal from "@/components/ui/Modal";
import type { Property } from "@/types";

export default function LocationModal({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  const shortName = property.name.split(",")[0];

  return (
    <Modal onClose={onClose} maxWidth="max-w-xl">
      <h2 className="text-center font-display text-lg font-semibold text-charcoal-600">
        {shortName} Location
      </h2>
      <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src={property.mapEmbedSrc}
          title={`${property.name} location`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Modal>
  );
}
