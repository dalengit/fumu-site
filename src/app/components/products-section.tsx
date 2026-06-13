"use client";

import Image from "next/image";
import { useState, type JSX } from "react";
import { productsSectionContent } from "../data/site-content";
import { siteConfig } from "../site-config";
import { ProductDetailsModal } from "./product-details-modal";
import { ScrollReveal } from "./scroll-reveal";
import type { Product } from "../types/product";

interface ProductsSectionProps {
    products: ReadonlyArray<Product>;
}

const productImageByName: Record<string, { src: string; alt: string; width: number; height: number }> = {
    ORIGINAL: {
        src: `${siteConfig.basePath}/assets/original_edited.png`,
        alt: "FUMU Original product jar",
        width: 442,
        height: 433,
    },
    SUPERHOT: {
        src: `${siteConfig.basePath}/assets/superhot_edited.png`,
        alt: "FUMU Superhot product jar",
        width: 443,
        height: 433,
    },
    KIMCHI: {
        src: `${siteConfig.basePath}/assets/kimchi_edited.png`,
        alt: "FUMU Kimchi product jar",
        width: 443,
        height: 433,
    },
};

function ProductCard({ product, onFindOutMore }: { product: Product; onFindOutMore: (product: Product) => void }): JSX.Element {
    const productImage = productImageByName[product.name];

    return (
        <article className="grid grid-cols-1 gap-4 px-4 py-4 sm:px-6 sm:py-5 md:grid-cols-12 md:items-center md:gap-6">
            <div className="space-y-2 md:col-span-8 lg:col-span-9">
                <h3 className="font-sans text-lg font-black tracking-tighter sm:text-xl">{product.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    Heat {product.heat} | {product.size}
                </p>
                <p className="text-sm">{product.note}</p>
                <div className="pt-1">
                    <button
                        type="button"
                        onClick={() => onFindOutMore(product)}
                        className="motion-lift min-h-11 w-full rounded-none border border-black px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white sm:w-auto"
                    >
                        {productsSectionContent.findOutMoreLabel}
                    </button>
                </div>
            </div>

            {productImage ? (
                <div className="overflow-hidden border border-black bg-neutral-100 md:col-span-4 lg:col-span-3 md:justify-self-end md:max-w-[220px] lg:max-w-[240px]">
                    <Image
                        src={productImage.src}
                        alt={productImage.alt}
                        width={productImage.width}
                        height={productImage.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 220px, 240px"
                        className="h-auto w-full object-cover"
                    />
                </div>
            ) : null}
        </article>
    );
}

export function ProductsSection({ products }: ProductsSectionProps): JSX.Element {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <>
            <section id="products" className="mt-10 w-full scroll-mt-28 rounded-none border border-black sm:mt-14 sm:scroll-mt-24 lg:mt-20 xl:mx-auto xl:w-[calc(50%+220px)]">
                <div className="border-b border-black px-4 py-4 sm:px-6">
                    <h2 className="font-sans text-xl font-black tracking-tighter sm:text-4xl">{productsSectionContent.heading}</h2>
                </div>
                <div className="grid grid-cols-1 divide-y divide-black">
                    {products.map((product, index) => (
                        <ScrollReveal key={product.name} delayMs={index * 90} threshold={0.1}>
                            <ProductCard product={product} onFindOutMore={setSelectedProduct} />
                        </ScrollReveal>
                    ))}
                </div>
            </section>
            <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </>
    );
}