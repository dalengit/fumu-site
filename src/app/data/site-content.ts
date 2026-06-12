import type {
  IngredientCloseupItem,
  LifestylePhotoItem,
  ProductPhotoSpotlightContent,
} from "../types/content";
import { siteConfig } from "../site-config";

const assetPath = (path: string): string => `${siteConfig.basePath}${path}`;

const mascotImage = {
  src: assetPath("/assets/fumu_guy.png"),
  alt: "FUMU chilli oil jar visual for small-batch launch",
  width: 1200,
  height: 1200,
} as const;

export const productPhotoSpotlightContent: ProductPhotoSpotlightContent = {
  eyebrow: "Product spotlight",
  title: "Handmade chilli oil Manchester, bottled in small batches",
  description:
    "FUMU chilli oil hero photography showcases the jar, texture, and brand identity for better product discovery and stronger click-through.",
  primaryImage: {
    ...mascotImage,
    caption: "Primary jar hero shot",
  },
  secondaryImage: {
    ...mascotImage,
    caption: "Secondary angle detail",
  },
};

export const lifestylePhotoItems: ReadonlyArray<LifestylePhotoItem> = [
  {
    ...mascotImage,
    title: "Noodles",
    caption: "FUMU chilli oil over quick noodles.",
  },
  {
    src: assetPath("/paper-texture-4.jpg"),
    alt: "FUMU chilli oil serving idea for dumplings",
    width: 1200,
    height: 900,
    title: "Dumplings",
    caption: "Dumpling dip heat boost.",
  },
  {
    src: assetPath("/fumu-hero-grit.svg"),
    alt: "FUMU chilli oil serving idea for eggs",
    width: 1200,
    height: 900,
    title: "Eggs",
    caption: "Crisp chilli finish on eggs.",
  },
  {
    src: assetPath("/window.svg"),
    alt: "FUMU chilli oil serving idea for rice bowls",
    width: 1200,
    height: 900,
    title: "Rice bowls",
    caption: "Layered umami for rice bowls.",
  },
  {
    src: assetPath("/globe.svg"),
    alt: "FUMU chilli oil serving idea for stir-fries",
    width: 1200,
    height: 900,
    title: "Stir-fries",
    caption: "Wok-friendly chilli oil lift.",
  },
];

export const ingredientCloseupItems: ReadonlyArray<IngredientCloseupItem> = [
  {
    src: assetPath("/assets/fumu_guy.png"),
    alt: "Close-up visual representing FUMU chilli blend",
    width: 900,
    height: 900,
    title: "Chillies",
    note: "Layered chilli profile tuned for heat and aroma.",
  },
  {
    src: assetPath("/paper-texture-4.jpg"),
    alt: "Close-up visual representing garlic infusion",
    width: 900,
    height: 900,
    title: "Garlic",
    note: "Garlic depth balances the chilli hit.",
  },
  {
    src: assetPath("/next.svg"),
    alt: "Close-up visual representing aromatic ingredients",
    width: 900,
    height: 900,
    title: "Aromatics",
    note: "Aromatic infusion adds complexity to every spoon.",
  },
  {
    src: assetPath("/file.svg"),
    alt: "Close-up visual representing chilli oil texture",
    width: 900,
    height: 900,
    title: "Oil texture",
    note: "Silky texture designed to coat and cling.",
  },
];
