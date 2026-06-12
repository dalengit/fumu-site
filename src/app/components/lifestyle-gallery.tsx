import Image from "next/image";
import type { JSX } from "react";
import type { LifestylePhotoItem } from "../types/content";

interface LifestyleGalleryProps {
  items: ReadonlyArray<LifestylePhotoItem>;
}

export function LifestyleGallery({ items }: LifestyleGalleryProps): JSX.Element {
  return (
    <section
      id="lifestyle"
      aria-labelledby="lifestyle-heading"
      className="mt-12 w-full scroll-mt-32 border border-black sm:mt-16 sm:scroll-mt-24 lg:mt-24"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <h2 id="lifestyle-heading" className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">FUMU IN FOOD</h2>
        <p className="mt-3 text-sm text-neutral-700">Serving ideas for FUMU chilli oil across noodles, dumplings, eggs, rice bowls, and stir-fries.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 sm:py-6 lg:grid-cols-5">
        {items.map((item) => (
          <figure key={item.title} className="space-y-2">
            <div className="aspect-square w-full overflow-hidden border border-black bg-neutral-100">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption>
              <p className="font-sans text-base font-black tracking-tight">{item.title}</p>
              {item.caption ? <p className="text-xs text-neutral-700">{item.caption}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
