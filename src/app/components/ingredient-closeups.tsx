import Image from "next/image";
import type { JSX } from "react";
import type { IngredientCloseupItem } from "../types/content";

interface IngredientCloseupsProps {
  items: ReadonlyArray<IngredientCloseupItem>;
}

export function IngredientCloseups({ items }: IngredientCloseupsProps): JSX.Element {
  return (
    <section
      id="ingredients"
      aria-labelledby="ingredients-heading"
      className="mt-12 w-full scroll-mt-32 border border-black sm:mt-16 sm:scroll-mt-24 lg:mt-24"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <h2 id="ingredients-heading" className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">INGREDIENT CLOSE-UPS</h2>
        <p className="mt-3 text-sm text-neutral-700">See the ingredient profile behind artisan chilli oil Manchester cooks use for clean heat and layered umami.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 sm:py-6 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.title} className="space-y-3">
            <div className="aspect-square overflow-hidden border border-black bg-neutral-100">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-sans text-lg font-black tracking-tight">{item.title}</h3>
            <p className="text-sm text-neutral-700">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
