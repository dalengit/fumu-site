export interface Product {
    name: string;
    heat: "MILD" | "MEDIUM" | "HIGH";
    size: string;
    note: string;
    ingredients: string;
}