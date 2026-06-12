import type {
  HowToUseContent,
  IngredientCloseupItem,
  LifestylePhotoItem,
  ProductPhotoSpotlightContent,
} from "../types/content";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const assetPath = (path: string): string => `${publicBasePath}${path}`;

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

export const howToUseContent: HowToUseContent = {
  title: "HOW TO USE FUMU",
  intro:
    "Use FUMU chilli oil as a finishing layer or mixed base for quick meals. This section is built for scan-fast cooking inspiration.",
  servingIdeas: [
    "Drizzle on noodles",
    "Mix into dips",
    "Add to marinades",
    "Top on eggs",
    "Stir into soups",
  ],
  recipes: [
    {
      title: "5-minute noodle bowl",
      description: "Cook noodles, add a spoon of FUMU chilli oil, soy, spring onion, and sesame.",
      time: "5 min",
    },
    {
      title: "FUMU fried rice",
      description: "Toss day-old rice with egg, veg, and finish with FUMU for heat and aroma.",
      time: "12 min",
    },
    {
      title: "Spicy mayo",
      description: "Whisk mayo with FUMU chilli oil and a squeeze of lime for fries or sandwiches.",
      time: "3 min",
    },
    {
      title: "Dumpling dipping sauce",
      description: "Combine light soy, black vinegar, garlic, and FUMU chilli oil.",
      time: "4 min",
    },
  ],
  pairings: ["Eggs", "Rice", "Dumplings", "Stir-fries", "Grilled meats"],
};
