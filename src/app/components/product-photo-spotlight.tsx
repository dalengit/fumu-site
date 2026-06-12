import Image from "next/image";
import type { JSX } from "react";
import type { ProductPhotoSpotlightContent } from "../types/content";

interface ProductPhotoSpotlightProps {
  content: ProductPhotoSpotlightContent;
}

export function ProductPhotoSpotlight({ content }: ProductPhotoSpotlightProps): JSX.Element {
  return (
    <section
      id="photo-spotlight"
      aria-labelledby="photo-spotlight-heading"
      className="mt-10 w-full scroll-mt-28 rounded-none border border-black sm:mt-14 sm:scroll-mt-24 lg:mt-20 xl:mx-auto xl:w-[calc(50%+220px)]"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">{content.eyebrow}</p>
        <h2 id="photo-spotlight-heading" className="mt-2 font-sans text-xl font-black tracking-tighter sm:text-4xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">{content.description}</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          Crafted in Bolton, near Manchester. Explore the <a href="#products" className="underline decoration-black/40 underline-offset-2 hover:decoration-black">FUMU product line</a> for current heat levels and drop status.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:grid-cols-12">
        <figure className="flex h-full flex-col lg:col-span-8">
          <div className="aspect-square w-full flex-1 overflow-hidden border border-black bg-neutral-100 lg:aspect-auto">
            <Image
              src={content.primaryImage.src}
              alt={content.primaryImage.alt}
              width={content.primaryImage.width}
              height={content.primaryImage.height}
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="h-full w-full object-cover"
            />
          </div>
          {content.primaryImage.caption ? (
            <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-600">
              {content.primaryImage.caption}
            </figcaption>
          ) : null}
        </figure>

        {content.secondaryImage ? (
          <figure className="flex h-full flex-col lg:col-span-4">
            <div className="aspect-square w-full flex-1 overflow-hidden border border-black bg-neutral-100 lg:aspect-auto">
              <Image
                src={content.secondaryImage.src}
                alt={content.secondaryImage.alt}
                width={content.secondaryImage.width}
                height={content.secondaryImage.height}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
            {content.secondaryImage.caption ? (
              <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-600">
                {content.secondaryImage.caption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  );
}
