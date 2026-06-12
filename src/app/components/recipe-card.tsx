import type { JSX } from "react";
import type { RecipeItem } from "../types/content";

interface RecipeCardProps {
  recipe: RecipeItem;
}

export function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
  return (
    <article className="flex h-full flex-col justify-between border border-black px-4 py-4 sm:px-5 sm:py-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">Quick recipe</p>
        <h3 className="mt-2 font-sans text-lg font-black tracking-tight">{recipe.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{recipe.description}</p>
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600">Time {recipe.time}</p>
    </article>
  );
}
