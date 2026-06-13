import Image from "next/image";
import type { JSX } from "react";
import type { ProductPhotoSpotlightContent } from "../types/content";

interface ProductPhotoSpotlightProps {
  content: ProductPhotoSpotlightContent;
}

export function ProductPhotoSpotlight({ content }: ProductPhotoSpotlightProps): JSX.Element {
  const hasSecondaryImage = Boolean(content.secondaryImage);

  return (
    <section
      id="photo-spotlight"
      aria-labelledby="photo-spotlight-heading"
      className="mt-10 w-full scroll-mt-28 rounded-none border border-black sm:mt-14 sm:scroll-mt-24 lg:mt-20 xl:mx-auto xl:w-[calc(50%+220px)]"
    >
      <div className="border-b border-black px-4 py-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">{content.eyebrow}</p>
        <h2 id="photo-spotlight-heading" className="mt-2 font-sans text-xl font-black tracking-tighter sm:text-4xl">{content.title}</h2>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-neutral-700">{content.description}</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          {content.supportingText}{" "}
          <a href={content.supportingLinkHref} className="underline decoration-black/40 underline-offset-2 hover:decoration-black">{content.supportingLinkLabel}</a>{" "}
          {content.supportingSuffix}
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:grid-cols-12">
        <figure className={`flex h-full flex-col ${hasSecondaryImage ? "lg:col-span-8" : "lg:col-span-12"}`}>
          <div
            className="w-full overflow-hidden border border-black bg-neutral-100"
            style={{ aspectRatio: `${content.primaryImage.width} / ${content.primaryImage.height}` }}
          >
            <Image
              src={content.primaryImage.src}
              alt={content.primaryImage.alt}
              width={content.primaryImage.width}
              height={content.primaryImage.height}
              sizes={hasSecondaryImage ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 100vw"}
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
            <div
              className="w-full overflow-hidden border border-black bg-neutral-100"
              style={{ aspectRatio: `${content.secondaryImage.width} / ${content.secondaryImage.height}` }}
            >
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
