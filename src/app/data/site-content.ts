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
  eyebrow: "Loadout",
  title: "Meet The Full FUMU Range",
  description:
    "From all-day flavour builders to serious face-tingle heat, the FUMU range is built for noodles, rice, eggs, and rogue fridge meals." +
    "\nSmall-batch in Bolton with layered chilli depth, aromatic lift, and a clean finish that keeps you coming back.",
  supportingText:
    "Mixed in Bolton. Explore the",
  supportingLinkLabel: "full FUMU loadout",
  supportingLinkHref: "#products",
  supportingSuffix: "and pick your heat level.",
  primaryImage: {
    ...mascotImage,
    caption: "Current drop: SuperHot Chilli Oil, Original Chilli Oil, and FUMU Kimchi.",
  },
};

export const heroContent: HeroContent = {
  title: "FUMU",
  description:
    "Handmade in Bolton. Bold chilli oils and ferments built to wake up everyday food.",
  ctaLabel: "See the drop",
  ctaHref: "#photo-spotlight",
  ctaAriaLabel: "Jump to the FUMU product drop",
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
    "From chilli oil to fermented staples, every FUMU drop is made in Manchester for noodles, eggs, pizza, beans on toast at 1am, and whatever else is about to enter your mouth.",
  approachLabel: "How we move",
  approachText:
    "FUMU started as a tiny kitchen experiment and turned into a flavour system people actually use: clean heat, layered umami, and ingredients that hold up in real home cooking.",
  highlights: [
    {
      title: "No weak batches",
      text: "We run small on purpose so every jar hits hard: loud aroma, deep umami, and heat that does not fade halfway through the meal.",
    },
    {
      title: "Real stuff only",
      text: "Proper chillies, garlic, aromatics, and good oil. No filler energy, no fake hype, just layered flavour that earns its spot on the table.",
    },
    {
      title: "Built for chaos meals",
      text: "Midnight noodles, pre-work eggs, leftover rice straight from the pan. FUMU drags chaotic meals out of the gutter and turns them into full flavour events.",
    },
  ],
};

export const productsSectionContent: ProductsSectionContent = {
  heading: "THE DROP",
  findOutMoreLabel: "See details",
};

export const gallerySectionContent: GallerySectionContent = {
  heading: "GALLERY",
  description: "A closer look at the texture, crunch, heat, and kitchen chaos behind every FUMU batch.",
  previousLabel: "Slide gallery left",
  nextLabel: "Slide gallery right",
};

export const contactSectionContent: ContactSectionContent = {
  heading: "CONTACT",
  locationText: "Manchester, UK",
  emailLabel: "Hit us on email",
  emailAddress: "fuchankee@gmail.com",
  instagramLabel: "Instagram",
  instagramUrl: "https://www.instagram.com/fumu.chilli/",
  formSubject: "New message from fumu-site",
  submitLabel: "Send it",
  fields: {
    nameLabel: "Name",
    namePlaceholder: "What should we call you?",
    emailLabel: "Email",
    emailPlaceholder: "fumuEater420@chilli.com",
    messageLabel: "Message",
    messagePlaceholder: "Wholesale, collabs, stockists, press...",
  },
};

export const footerContent: FooterContent = {
  batchText: "Batch_004 | next drop 2026-06-21 09:00 UTC | stay ready",
  homeLabel: "Back to top",
};

export const ingredientCloseupItems: ReadonlyArray<IngredientCloseupItem> = [
  {
    src: assetPath("/assets/round_chilli.jpg"),
    alt: "Close-up visual representing FUMU chilli blend",
    width: 900,
    height: 900,
    title: "CHILLIS",
    note: "Three chilli types, one mission: depth, aroma, and heat that actually tastes like something.",
  },
  {
    src: assetPath("/assets/garlic.jpg"),
    alt: "Close-up visual representing garlic infusion",
    width: 900,
    height: 900,
    title: "GARLIC",
    note: "Golden-fried garlic for crunch, aroma, and that extra hit your noodles were missing.",
  },
  {
    src: assetPath("/assets/flame_pan.jpg"),
    alt: "Close-up visual representing aromatic ingredients",
    width: 900,
    height: 900,
    title: "FIRE",
    note: "Controlled heat. Slow infusion. Big flavour in every spoon.",
  },
  {
    src: assetPath("/assets/round_wok_chilli.jpg"),
    alt: "Close-up visual representing roasted chilli heat",
    width: 900,
    height: 900,
    title: "ROASTED HEAT",
    note: "Roasted chillies for smoky depth and bite, never pointless burn.",
  },
  {
    src: assetPath("/assets/fried_garlic.jpg"),
    alt: "Close-up visual of crunchy garlic texture",
    width: 900,
    height: 900,
    title: "CRUNCHY GARLIC",
    note: "Crunch factor locked in. Every bite gets texture and attitude.",
  },
  {
    src: assetPath("/assets/landscape_kitchen.jpg"),
    alt: "Close-up visual of the FUMU kitchen",
    width: 900,
    height: 900,
    title: "KITCHEN",
    note: "Small-batch kitchen runs keep every jar loud, consistent, and clean.",
  },
  {
    src: assetPath("/assets/spron.jpg"),
    alt: "Close-up visual of aromatic ingredients",
    width: 900,
    height: 900,
    title: "AROMATICS",
    note: "Aromatics bring lift and balance so the heat lands right.",
  },
  {
    src: assetPath("/assets/round_oil.jpg"),
    alt: "Close-up visual of chilli oil texture",
    width: 900,
    height: 900,
    title: "CHILLI OIL",
    note: "One drizzle and plain food is finished.",
  },
];