import type { JSX } from "react";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { ScrollReveal } from "./components/scroll-reveal";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { products } from "./data/products";

export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen w-full text-black">
      <SiteHeader />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 py-12 sm:px-10 lg:px-16">
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
