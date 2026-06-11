"use client";

import { useEffect, type JSX } from "react";
import type { Product } from "../types/product";

interface ProductDetailsModalProps {
    product: Product | null;
    onClose: () => void;
}

export function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps): JSX.Element | null {
    useEffect(() => {
        if (!product) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent): void => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [product, onClose]);

    if (!product) {
        return null;
    }

    return (
        <div
            className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div className="modal-panel w-full max-w-xl rounded-none border border-black bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Product Details</p>
                        <h3 className="mt-2 font-sans text-3xl font-black tracking-tighter">{product.name}</h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-none border border-black px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                    >
                        Close
                    </button>
                </div>

                <div className="mt-6 space-y-4 text-sm">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                        Heat {product.heat} | {product.size} | {product.status}
                    </p>
                    <p>{product.note}</p>
                    <p className="leading-relaxed text-neutral-700">
                        <span className="font-mono uppercase tracking-widest text-neutral-600">Ingredients:</span>{" "}
                        {product.ingredients}
                    </p>
                </div>
            </div>
        </div>
    );
}