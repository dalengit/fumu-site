"use client";

import { useState, type JSX } from "react";
import { ProductDetailsModal } from "./product-details-modal";
import { ScrollReveal } from "./scroll-reveal";
import type { Product } from "../types/product";

interface ProductsSectionProps {
    products: ReadonlyArray<Product>;
}

function ProductCard({ product, onFindOutMore }: { product: Product; onFindOutMore: (product: Product) => void }): JSX.Element {
    return (
        <article className="flex flex-col gap-6 px-6 py-6">
            <div className="space-y-2">
                <h3 className="font-sans text-2xl font-black tracking-tighter">{product.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    Heat {product.heat} | {product.size}
                </p>
                <p className="text-sm">{product.note}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={() => onFindOutMore(product)}
                    className="motion-lift rounded-none border border-black px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                >
                    Find out more
                </button>
            </div>
        </article>
    );
}

export function ProductsSection({ products }: ProductsSectionProps): JSX.Element {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <>
            <section id="products" className="mt-16 w-full rounded-none border border-black lg:mt-24 xl:mx-auto xl:w-1/2">
                <div className="border-b border-black px-6 py-4">
                    <h2 className="font-sans text-3xl font-black tracking-tighter">PRODUCT LINE</h2>
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