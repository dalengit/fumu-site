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

export interface RecipeItem {
  title: string;
  description: string;
  time: string;
}

export interface HowToUseContent {
  title: string;
  intro: string;
  servingIdeas: ReadonlyArray<string>;
  recipes: ReadonlyArray<RecipeItem>;
  pairings: ReadonlyArray<string>;
}
