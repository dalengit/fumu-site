import type { Product } from "../types/product";

export const products: ReadonlyArray<Product> = [
    {
        name: "ORIGINAL",
        heat: "MEDIUM",
        size: "200ML",
        note: "Deep aromatics. Balanced heat.",
        status: "LIVE",
    },
    {
        name: "KIMCHI",
        heat: "MEDIUM",
        size: "200ML",
        note: "Fermented edge. Savory finish.",
        status: "LOW",
    },
    {
        name: "SUPERHOT",
        heat: "HIGH",
        size: "200ML",
        note: "Immediate hit. Long burn.",
        status: "SOLD OUT",
    },
];