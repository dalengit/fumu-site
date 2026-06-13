import type {
  AboutSectionContent,
  ContactSectionContent,
  FooterContent,
  GallerySectionContent,
  HeroContent,
  IngredientCloseupItem,
  ProductsSectionContent,
  ProductPhotoSpotlightContent,
  SiteHeaderNavLink,
} from "../types/content";
import { siteConfig } from "../site-config";

const assetPath = (path: string): string => `${siteConfig.basePath}${path}`;

const mascotImage = {
  src: assetPath("/assets/prod_edites.png"),
  alt: "FUMU product lineup image featuring available products",
  width: 1456,
  height: 732,
} as const;

export const productPhotoSpotlightContent: ProductPhotoSpotlightContent = {
  eyebrow: "Lineup",
  title: "The Full FUMU Range",
  description:
    "From everyday flavour boosters to serious heat, the FUMU range is built for noodles, rice, eggs, and everything in between (PIZZA!)." +
    "\nSmall-batch made in Manchester with layered chilli depth, aromatic lift, and a clean finish.",
  supportingText:
    "Crafted in Bolton. Explore the",
  supportingLinkLabel: "FUMU product line",
  supportingLinkHref: "#products",
  supportingSuffix: "for current heat levels.",
  primaryImage: {
    ...mascotImage,
    caption: "The current FUMU lineup: SuperHot Chilli Oil, Original Chilli Oil, and FUMU Kimchi.",
  },
};

export const heroContent: HeroContent = {
  title: "FUMU",
  description:
    "FUMU chilli oil, handmade in Manchester. Small-batch Asian condiments for bold everyday cooking.",
  ctaLabel: "Explore the drop",
  ctaHref: "#photo-spotlight",
  ctaAriaLabel: "Jump to product spotlight section",
  mascotAlt: "FUMU chilli oil mascot logo",
};

export const headerNavLinks: ReadonlyArray<SiteHeaderNavLink> = [
  { href: "#", label: "HOME", ariaLabel: "Scroll to top" },
  { href: "#photo-spotlight", label: "PRODUCTS", ariaLabel: "Jump to product spotlight section" },
  { href: "#about", label: "ABOUT" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

export const aboutSectionContent: AboutSectionContent = {
  heading: "ABOUT",
  whatWeMakeLabel: "What we make",
  whatWeMakeText:
    "From FUMU chilli oil to fermented staples, these small-batch chilli oil UK drops are handmade in Manchester for noodles, rice, eggs, stir-fries, and snacks.",
  approachLabel: "Our approach",
  approachText:
    "FUMU started as a tiny kitchen experiment and grew into artisan chilli oil Manchester cooks reach for: clean heat, layered umami, and ingredients that hold up in real home cooking.",
  highlights: [
    {
      title: "Small-batch production",
      text: "Built for bold flavour-first cooking, every batch is tuned for depth, texture, and everyday use.",
    },
    {
      title: "Real ingredients",
      text: "Built for bold flavour-first cooking, every batch is tuned for depth, texture, and everyday use.",
    },
    {
      title: "Hand bottled",
      text: "Built for bold flavour-first cooking, every batch is tuned for depth, texture, and everyday use.",
    },
  ],
};

export const productsSectionContent: ProductsSectionContent = {
  heading: "PRODUCT LINE",
  findOutMoreLabel: "Find out more",
};

export const gallerySectionContent: GallerySectionContent = {
  heading: "GALLERY",
  description: "Browse visuals that spotlight FUMU chilli oil texture, ingredients, and flavour profile.",
  previousLabel: "Scroll gallery left",
  nextLabel: "Scroll gallery right",
};

export const contactSectionContent: ContactSectionContent = {
  heading: "CONTACT",
  locationText: "FUMU Manchester, UK",
  emailLabel: "Email Us!",
  emailAddress: "fuchankee@gmail.com",
  instagramLabel: "Instagram",
  instagramUrl: "https://www.instagram.com/fumu.chilli/",
  formSubject: "New FUMU contact form submission",
  submitLabel: "Send",
  fields: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@domain.com",
    messageLabel: "Message",
    messagePlaceholder: "Wholesale, collabs, press",
  },
};

export const footerContent: FooterContent = {
  batchText: "Batch_004 | next drop 2026-06-21 09:00 UTC",
  homeLabel: "Home",
};

export const ingredientCloseupItems: ReadonlyArray<IngredientCloseupItem> = [
  {
    src: assetPath("/assets/round_chilli.jpg"),
    alt: "Close-up visual representing FUMU chilli blend",
    width: 900,
    height: 900,
    title: "CHILLIS",
    note: "3 Different types of chillies are blended for heat, depth, and aroma.",
  },
  {
    src: assetPath("/assets/garlic.jpg"),
    alt: "Close-up visual representing garlic infusion",
    width: 900,
    height: 900,
    title: "GARLIC",
    note: "Mmmmmm, garlic. Our garlic is fried to a golden crisp for aroma and texture.",
  },
  {
    src: assetPath("/assets/flame_pan.jpg"),
    alt: "Close-up visual representing aromatic ingredients",
    width: 900,
    height: 900,
    title: "FIRE",
    note: "Slow infusion adds complexity to every spoon.",
  },
  {
    src: assetPath("/assets/round_wok_chilli.jpg"),
    alt: "Close-up visual representing roasted chilli heat",
    width: 900,
    height: 900,
    title: "ROASTED HEAT",
    note: "Roasted chillis are carefully balanced for flavour, not just burn.",
  },
  {
    src: assetPath("/assets/fried_garlic.jpg"),
    alt: "Close-up visual of crunchy garlic texture",
    width: 900,
    height: 900,
    title: "CRUNCHY GARLIC",
    note: "Crunchy garlic adds texture and bite to every mouthful.",
  },
  {
    src: assetPath("/assets/landscape_kitchen.jpg"),
    alt: "Close-up visual of the FUMU kitchen",
    width: 900,
    height: 900,
    title: "KITCHEN",
    note: "Small-batch production in the kitchen keeps flavour, consistency, and quality on point.",
  },
  {
    src: assetPath("/assets/spron.jpg"),
    alt: "Close-up visual of aromatic ingredients",
    width: 900,
    height: 900,
    title: "AROMATICS",
    note: "Aromatic ingredients bring lift, fragrance, and balance to the final blend.",
  },
  {
    src: assetPath("/assets/round_oil.jpg"),
    alt: "Close-up visual of chilli oil texture",
    width: 900,
    height: 900,
    title: "CHILLI OIL",
    note: "FUMU: drizzle once, crave forever.",
  },
];