export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface ProductPhotoSpotlightContent {
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  supportingLinkLabel: string;
  supportingLinkHref: string;
  supportingSuffix: string;
  primaryImage: MediaAsset;
  secondaryImage?: MediaAsset;
}

export interface IngredientCloseupItem extends MediaAsset {
  title: string;
  note: string;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaAriaLabel: string;
  mascotAlt: string;
}

export interface AboutSectionContent {
  heading: string;
  whatWeMakeLabel: string;
  whatWeMakeText: string;
  approachLabel: string;
  approachText: string;
  highlights: ReadonlyArray<{
    title: string;
    text: string;
  }>;
}

export interface ProductsSectionContent {
  heading: string;
  findOutMoreLabel: string;
}

export interface GallerySectionContent {
  heading: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
}

export interface ContactSectionContent {
  heading: string;
  locationText: string;
  emailLabel: string;
  emailAddress: string;
  instagramLabel: string;
  instagramUrl: string;
  formSubject: string;
  submitLabel: string;
  fields: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
  };
}

export interface FooterContent {
  batchText: string;
  homeLabel: string;
}

export interface SiteHeaderNavLink {
  href: string;
  label: string;
  ariaLabel?: string;
}
