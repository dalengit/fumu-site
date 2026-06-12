import type { JSX } from "react";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { products } from "./data/products";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fumu.co";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const homepageUrl = `${normalizedSiteUrl}${publicBasePath}/`;

export default function Page(): JSX.Element {
  const productListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FUMU Product Line",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${homepageUrl}#products`,
      item: {
        "@type": "Product",
        name: `FUMU ${product.name}`,
        description: product.note,
        category: "Asian condiments",
        size: product.size,
        brand: {
          "@type": "Brand",
          name: "FUMU",
        },
      },
    })),
  };

  return (
    <main className="min-h-screen w-full text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
        <HeroSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProductsSection products={products} />
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
