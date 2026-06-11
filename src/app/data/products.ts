import type { Product } from "../types/product";

export const products: ReadonlyArray<Product> = [
    {
        name: "ORIGINAL",
        heat: "MEDIUM",
        size: "167ML",
        note: "Immediate addiction, heavy sweating, and zero tolerance for plain food.",
        ingredients:
            "Rapeseed Oil (Infused with Onion, Spring Onion, Coriander), Chilli Peppers, Garlic, Fermented Black Soybean (Soybeans), Water, Salt, Soy Sauce (Soybeans, Water, Salt, Wheat Flour), Soybean Oil, Sugar, Monosodium Glutamate.",
        status: "LIVE",
    },
    {
        name: "SUPERHOT",
        heat: "HIGH",
        size: "167ML",
        note: "Facial melting heat with existential regret in every spoonful.",
        ingredients:
            "Rapeseed Oil (Infused with Onion, Spring Onion, Coriander), Chilli Peppers (Base Chillies, Dried Super-Hots (1.5%) (Carolina Reaper, Ghost Pepper, Trinidad Scorpion)), Garlic, Fermented Black Soybean (Soybeans, Water, Salt), Soy Sauce (Soybeans, Water, Salt, Wheat Flour), Soybean Oil, Sugar, Monosodium Glutamate.",
        status: "SOLD OUT",
    },
    {
        name: "KIMCHI",
        heat: "MEDIUM",
        size: "150G",
        note: "Sensory overload, elite-level crunching, and bold fermented flavor.",
        ingredients:
            "Napa Cabbage, Daikon, Spring Onion, Onion, Garlic, Garlic Chives, Coriander, Fish Sauce (Water, Anchovy (Fish) Extract, Salt, Sugar), Rice Flour, Demerara Sugar, Sesame Oil (Sesame), Sesame Seeds (Sesame).",
        status: "LOW",
    },
];