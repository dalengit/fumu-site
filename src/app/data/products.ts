import type { Product } from "../types/product";

export const products: ReadonlyArray<Product> = [
    {
        name: "ORIGINAL",
        heat: "MEDIUM",
        size: "167ML",
        note:
            "Fragrant rapeseed oil infused with onion, spring onion, and coriander, loaded with chilli, garlic, and fermented black soybean depth.\nSavoury, punchy, and built to make noodles, eggs, and rice taste way louder.",
        ingredients:
            "Rapeseed Oil (Infused with Onion, Spring Onion, Coriander), Chilli Peppers, Garlic, Fermented Black Soybean (Soybeans), Water, Salt, Soy Sauce (Soybeans, Water, Salt, Wheat Flour), Soybean Oil, Sugar, Monosodium Glutamate.",
    },
    {
        name: "SUPERHOT",
        heat: "HIGH",
        size: "167ML",
        note:
            "Starts with the same aromatic onion-spring onion-coriander oil base, then brings in Carolina Reaper, Ghost Pepper, and Trinidad Scorpion for a savage heat spike.\nGarlic, fermented black soybean, and soy sauce keep it deep, salty, and dangerously moreish.",
        ingredients:
            "Rapeseed Oil (Infused with Onion, Spring Onion, Coriander), Chilli Peppers (Base Chillies, Dried Super-Hots (1.5%) (Carolina Reaper, Ghost Pepper, Trinidad Scorpion)), Garlic, Fermented Black Soybean (Soybeans, Water, Salt), Soy Sauce (Soybeans, Water, Salt, Wheat Flour), Soybean Oil, Sugar, Monosodium Glutamate.",
    },
    {
        name: "KIMCHI",
        heat: "MEDIUM",
        size: "150G",
        note:
            "Napa cabbage and daikon bring the crunch, while garlic, chives, coriander, and spring onion stack layers of funk and freshness.\nFish sauce, sesame oil, and a touch of demerara round it out into a sharp, bold ferment that cuts through rich food.",
        ingredients:
            "Napa Cabbage, Daikon, Spring Onion, Onion, Garlic, Garlic Chives, Coriander, Fish Sauce (Water, Anchovy (Fish) Extract, Salt, Sugar), Rice Flour, Demerara Sugar, Sesame Oil (Sesame), Sesame Seeds (Sesame).",
    },
];