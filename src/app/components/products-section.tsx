"use client";

import { useState, type JSX } from "react";
import { productsSectionContent } from "../data/site-content";
import { ProductDetailsModal } from "./product-details-modal";
import { ScrollReveal } from "./scroll-reveal";
import type { Product } from "../types/product";

interface ProductsSectionProps {
    products: ReadonlyArray<Product>;
}

function ProductCard({ product, onFindOutMore }: { product: Product; onFindOutMore: (product: Product) => void }): JSX.Element {
    return (
        <article className="flex flex-col gap-3 px-4 py-4 sm:gap-5 sm:px-6 sm:py-5">
            <div className="space-y-2">
                <h3 className="font-sans text-lg font-black tracking-tighter sm:text-xl">{product.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    Heat {product.heat} | {product.size}
                </p>
                <p className="text-sm">{product.note}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={() => onFindOutMore(product)}
                    className="motion-lift min-h-11 w-full rounded-none border border-black px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white sm:w-auto"
                >
                    {productsSectionContent.findOutMoreLabel}
                </button>
            </div>
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