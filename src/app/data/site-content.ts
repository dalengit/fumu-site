import type {
  IngredientCloseupItem,
  ProductPhotoSpotlightContent,
} from "../types/content";
import { siteConfig } from "../site-config";

const assetPath = (path: string): string => `${siteConfig.basePath}${path}`;

const mascotImage = {
  src: assetPath("/assets/fumu_guy.jpg"),
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

export const ingredientCloseupItems: ReadonlyArray<IngredientCloseupItem> = [
  {
    src: assetPath("/assets/round_chilli.jpg"),
    alt: "Close-up visual representing FUMU chilli blend",
    width: 900,
    height: 900,
    title: "Chillies",
    note: "Layered chilli profile tuned for heat and aroma.",
  },
  {
    src: assetPath("/assets/garlic.jpg"),
    alt: "Close-up visual representing garlic infusion",
    width: 900,
    height: 900,
    title: "Garlic",
    note: "Garlic depth balances the chilli hit.",
  },
  {
    src: assetPath("/assets/flame_pan.jpg"),
    alt: "Close-up visual representing aromatic ingredients",
    width: 900,
    height: 900,
    title: "Aromatics",
    note: "Aromatic infusion adds complexity to every spoon.",
  },
  {
    src: assetPath("/assets/round_oil.jpg"),
    alt: "Close-up visual representing chilli oil texture",
    width: 900,
    height: 900,
    title: "Oil texture",
    note: "Silky texture designed to coat and cling.",
  },
  {
    src: assetPath("/assets/round_wok_chilli.jpg"),
    alt: "Close-up visual representing balanced heat",
    width: 900,
    height: 900,
    title: "Balanced heat",
    note: "Heat is calibrated for flavour-first cooking.",
  },
  {
    src: assetPath("/assets/fried_garlic.jpg"),
    alt: "Close-up visual representing chilli crunch",
    width: 900,
    height: 900,
    title: "Chilli crunch",
    note: "Textural crunch gives every bite more character.",
  },
  {
    src: assetPath("/assets/landscape_kitchen.jpg"),
    alt: "Close-up visual representing aroma lift",
    width: 900,
    height: 900,
    title: "Aroma lift",
    note: "Aromatic top-notes stay present after cooking.",
  },
  {
    src: assetPath("/assets/portrait_kitchen.jpg"),
    alt: "Close-up visual representing umami layer",
    width: 900,
    height: 900,
    title: "Umami layer",
    note: "Layered umami rounds out the chilli profile.",
  },
  {
    src: assetPath("/assets/spron.jpg"),
    alt: "Close-up visual representing finish and cling",
    width: 900,
    height: 900,
    title: "Finish and cling",
    note: "Oil body clings to noodles, eggs, and rice.",
  },
];