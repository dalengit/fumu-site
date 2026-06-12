import { useEffect, useMemo, useRef } from "react";
import type { IngredientCloseupItem } from "../types/content";

export interface LoopedGalleryItem {
  item: IngredientCloseupItem;
  sourceIndex: number;
  key: string;
}

interface UseLoopingGalleryResult {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  loopedItems: ReadonlyArray<LoopedGalleryItem>;
  recenterLoopIfNeeded: () => void;
  scrollGalleryBy: (direction: "previous" | "next") => void;
}

export function useLoopingGallery(items: ReadonlyArray<IngredientCloseupItem>): UseLoopingGalleryResult {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const loopedItems = useMemo<LoopedGalleryItem[]>(() => {
    const repeatedSets = 3;
    return Array.from({ length: repeatedSets }, (_, repeatIndex) =>
      items.map((item, sourceIndex) => ({
        item,
        sourceIndex,
        key: `${item.title}-${repeatIndex}-${sourceIndex}`,
      })),
    ).flat();
  }, [items]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) {
      return;
    }

    carousel.scrollLeft = carousel.scrollWidth / 3;
  }, [items.length]);

  const recenterLoopIfNeeded = (): void => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) {
      return;
    }

    const oneSetWidth = carousel.scrollWidth / 3;
    if (carousel.scrollLeft < oneSetWidth * 0.25) {
      carousel.scrollLeft += oneSetWidth;
    } else if (carousel.scrollLeft > oneSetWidth * 1.75) {
      carousel.scrollLeft -= oneSetWidth;
    }
  };

  const scrollGalleryBy = (direction: "previous" | "next"): void => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const distance = Math.max(carousel.clientWidth * 0.75, 240);
    carousel.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return {
    carouselRef,
    loopedItems,
    recenterLoopIfNeeded,
    scrollGalleryBy,
  };
}