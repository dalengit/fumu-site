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
  primaryImage: MediaAsset;
  secondaryImage?: MediaAsset;
}

export interface LifestylePhotoItem extends MediaAsset {
  title: string;
}

export interface IngredientCloseupItem extends MediaAsset {
  title: string;
  note: string;
}
