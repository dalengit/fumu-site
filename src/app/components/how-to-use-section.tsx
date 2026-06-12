import type { JSX } from "react";
import type { HowToUseContent } from "../types/content";
import { RecipeCard } from "./recipe-card";

interface HowToUseSectionProps {
  content: HowToUseContent;
}

export function HowToUseSection({ content }: HowToUseSectionProps): JSX.Element {
  return (
    <section
      id="how-to-use"
      aria-labelledby="how-to-use-heading"
      className="mt-12 w-full scroll-mt-32 border border-black sm:mt-16 sm:scroll-mt-24 lg:mt-24"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <h2 id="how-to-use-heading" className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">
          {content.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">{content.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-12">
        <article className="space-y-3 lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Serving ideas</p>
          <ul className="space-y-2">
            {content.servingIdeas.map((idea) => (
              <li key={idea} className="border border-black px-3 py-2 text-sm">
                {idea}
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-3 lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Quick recipes</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.recipes.map((recipe) => (
              <RecipeCard key={recipe.title} recipe={recipe} />
            ))}
          </div>
        </article>

        <article className="space-y-3 lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Pairings</p>
          <div className="flex flex-wrap gap-2">
            {content.pairings.map((pairing) => (
              <span
                key={pairing}
                className="inline-flex items-center border border-black px-3 py-1 font-mono text-[11px] uppercase tracking-widest"
              >
                {pairing}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-neutral-700">
            Handmade chilli oil Manchester cooks use for quick flavour layering without masking the base dish.
          </p>
        </article>
      </div>
    </section>
  );
}
