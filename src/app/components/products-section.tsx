import type { JSX } from "react";
import type { Product } from "../types/product";

interface ProductsSectionProps {
    products: ReadonlyArray<Product>;
}

function ProductCard({ product }: { product: Product }): JSX.Element {
    return (
        <article className="flex flex-col gap-6 px-6 py-6">
            <div className="space-y-2">
                <h3 className="font-sans text-2xl font-black tracking-tighter">{product.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    Heat {product.heat} // {product.size}
                </p>
                <p className="text-sm">{product.note}</p>
                <p className="text-xs leading-relaxed text-neutral-700">
                    <span className="font-mono uppercase tracking-widest text-neutral-600">Ingredients:</span>{" "}
                    {product.ingredients}
                </p>
            </div>
            <div className="flex items-center justify-between gap-3">
                <span className="rounded-none border border-red-700 bg-red-700 px-2 py-1 font-mono text-xs uppercase tracking-widest text-white">
                    {product.status}
                </span>
                <button
                    type="button"
                    className="rounded-none border border-black px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                >
                    Notify Me
                </button>
            </div>
        </article>
    );
}

export function ProductsSection({ products }: ProductsSectionProps): JSX.Element {
    return (
        <section id="products" className="mt-10 w-full rounded-none border border-black xl:mx-auto xl:w-1/2">
            <div className="border-b border-black px-6 py-4">
                <h2 className="font-sans text-3xl font-black tracking-tighter">PRODUCT LINE</h2>
            </div>
            <div className="grid grid-cols-1 divide-y divide-black">
                {products.map((product) => (
                    <ProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
}