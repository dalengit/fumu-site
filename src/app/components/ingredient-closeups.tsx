"use client";

import Image from "next/image";
import { useState, type JSX } from "react";
import type { IngredientCloseupItem } from "../types/content";
import { GalleryImageModal } from "./gallery-image-modal";
import { GalleryNavButtons } from "./gallery-nav-buttons";
import { useLoopingGallery } from "./use-looping-gallery";

interface IngredientCloseupsProps {
  items: ReadonlyArray<IngredientCloseupItem>;
}

export function IngredientCloseups({ items }: IngredientCloseupsProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { carouselRef, loopedItems, recenterLoopIfNeeded, scrollGalleryBy } = useLoopingGallery(items);

  const goToPrevious = (): void => {
    setSelectedIndex((current) => {
      if (current === null || items.length === 0) {
        return current;
      }

      return (current - 1 + items.length) % items.length;
    });
  };

  const goToNext = (): void => {
    setSelectedIndex((current) => {
      if (current === null || items.length === 0) {
        return current;
      }

      return (current + 1) % items.length;
    });
  };

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="mt-12 w-full scroll-mt-32 border border-black sm:mt-16 sm:scroll-mt-24 lg:mt-24 xl:mx-auto xl:w-[calc(50%+260px)]"
      >
        <div className="border-b border-black px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 id="gallery-heading" className="font-sans text-2xl font-black tracking-tighter sm:text-5xl">GALLERY</h2>
              <p className="mt-3 text-sm text-neutral-700">Browse visuals that spotlight FUMU chilli oil texture, ingredients, and flavour profile.</p>
            </div>
            <GalleryNavButtons
              onPrevious={() => scrollGalleryBy("previous")}
              onNext={() => scrollGalleryBy("next")}
              previousLabel="Scroll gallery left"
              nextLabel="Scroll gallery right"
              className="flex items-center gap-2"
            />
          </div>
        </div>

        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <div ref={carouselRef} onScroll={recenterLoopIfNeeded} className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {loopedItems.map((entry) => (
              <figure key={entry.key} className="w-[300px] shrink-0 snap-start sm:w-[360px] lg:w-[420px]">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(entry.sourceIndex)}
                  aria-label={`Open enlarged view for ${entry.item.title}`}
                  className="group block w-full text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden border border-black bg-neutral-100">
                    <Image
                      src={entry.item.src}
                      alt={`${entry.item.alt}. ${entry.item.note}`}
                      width={entry.item.width}
                      height={entry.item.height}
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GalleryImageModal
        items={items}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
