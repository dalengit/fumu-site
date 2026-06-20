import type { JSX } from "react";
import type { Metadata } from "next";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { IngredientCloseups } from "./components/ingredient-closeups";
import { ProductsSection } from "./components/products-section";
import { ProductPhotoSpotlight } from "./components/product-photo-spotlight";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { products } from "./data/products";
import {
  ingredientCloseupItems,
  productPhotoSpotlightContent,
} from "./data/site-content";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  title: "FUMU | Handmade Chilli Oil and Asian Condiments",
  description:
    "Explore FUMU chilli oil in Bolton and Manchester, including product photography, gallery highlights, and the full small-batch product line.",
  alternates: {
    canonical: siteConfig.canonicalPath,
  },
};

export default function Page(): JSX.Element {
  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FUMU Product Line",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.homeUrl}#products`,
      item: {
        "@type": "Product",
        name: `FUMU ${product.name}`,
        description: product.note,
        category: "Asian condiments",
        size: product.size,
        image: `${siteConfig.siteOrigin}${siteConfig.basePath}/assets/fumu_guy.jpg`,
        brand: {
          "@type": "Brand",
          name: "FUMU",
        },
      },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FUMU Manchester, Bolton | Handmade Chilli Oil and Asian Condiments",
    url: siteConfig.homeUrl,
    description:
      "FUMU chilli oil is handmade in Bolton and  Manchester, UK. Discover small-batch Asian condiments, product photography, gallery highlights, and product details.",
    primaryImageOfPage: `${siteConfig.siteOrigin}${siteConfig.basePath}/assets/fumu_guy.jpg`,
    inLanguage: "en-GB",
    about: [
      "FUMU chilli oil",
      "handmade chilli oil Manchester",
      "handmade chilli oil Bolton",
      "small-batch chilli oil UK",
      "Asian condiments Manchester, Bolton",
    ],
  };

  return (
    <main className="min-h-screen w-full text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
        <HeroSection />
        <ScrollReveal>
          <ProductPhotoSpotlight content={productPhotoSpotlightContent} />
        </ScrollReveal>
        <ProductsSection products={products} />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <IngredientCloseups items={ingredientCloseupItems} />
        </ScrollReveal>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
        <ScrollReveal>
          <SiteFooter />
        </ScrollReveal>
      </div>
    </main>
  );
}
