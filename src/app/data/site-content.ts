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
    "From everyday flavour boosters to serious heat, the FUMU range is built for noodles, rice, eggs, and everything in between. Small-batch made in Manchester with layered chilli depth, aromatic lift, and a clean finish.",
  supportingText:
    "Crafted in Bolton, near Manchester. Explore the",
  supportingLinkLabel: "FUMU product line",
  supportingLinkHref: "#products",
  supportingSuffix: "for current heat levels and drop status.",
  primaryImage: {
    ...mascotImage,
    caption: "The current FUMU lineup: small-batch jars crafted for flavour-first cooking.",
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