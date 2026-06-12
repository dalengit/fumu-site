"use client";

import Image from "next/image";
import { type JSX } from "react";
import type { IngredientCloseupItem } from "../types/content";

interface IngredientCloseupsProps {
  items: ReadonlyArray<IngredientCloseupItem>;
}

export function IngredientCloseups({ items }: IngredientCloseupsProps): JSX.Element {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="mt-12 w-full scroll-mt-32 border border-black sm:mt-16 sm:scroll-mt-24 lg:mt-24 xl:mx-auto xl:w-[calc(50%+200px)]"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <h2 id="gallery-heading" className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">GALLERY</h2>
        <p className="mt-3 text-sm text-neutral-700">Browse visuals that spotlight FUMU chilli oil texture, ingredients, and flavour profile.</p>
      </div>

      <div className="space-y-3 px-4 py-5 sm:px-6 sm:py-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
          Scroll horizontally with touchpad or swipe.
        </p>
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {items.map((item) => (
            <figure key={item.title} className="w-[300px] shrink-0 snap-start sm:w-[360px] lg:w-[420px]">
              <div className="relative aspect-[4/3] overflow-hidden border border-black bg-neutral-100">
                <Image
                  src={item.src}
                  alt={`${item.alt}. ${item.note}`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
                  className="h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-white">
                  {item.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
