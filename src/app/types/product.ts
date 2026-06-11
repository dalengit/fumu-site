export type ProductStatus = "LIVE" | "LOW" | "SOLD OUT";

export interface Product {
    name: string;
    heat: "MILD" | "MEDIUM" | "HIGH";
    size: string;
    note: string;
    ingredients: string;
    status: ProductStatus;
}