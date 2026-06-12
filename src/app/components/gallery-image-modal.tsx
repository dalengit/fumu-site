"use client";

import Image from "next/image";
import { useEffect, type JSX } from "react";
import { createPortal } from "react-dom";
import type { IngredientCloseupItem } from "../types/content";
import { GalleryNavButtons } from "./gallery-nav-buttons";

interface GalleryImageModalProps {
  items: ReadonlyArray<IngredientCloseupItem>;
  selectedIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function GalleryImageModal({
  items,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryImageModalProps): JSX.Element | null {
  const item = selectedIndex === null ? null : items[selectedIndex];

  useEffect(() => {
    if (!item) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onPrevious, onNext]);

  if (!item) {
    return null;
  }

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Expanded gallery image: ${item.title}`}
      onClick={onClose}
    >
      <div
        className="modal-panel flex h-[90vh] w-full max-w-5xl flex-col border border-black bg-white p-4 text-black shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <div className="px-2 text-center sm:px-24">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Gallery</p>
            <h3 className="mt-2 font-sans text-2xl font-black tracking-tighter sm:text-3xl">{item.title}</h3>
          </div>
          <div className="absolute right-0 top-0 flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-none border border-black px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
            >
              Close
            </button>
            <GalleryNavButtons
              onPrevious={onPrevious}
              onNext={onNext}
              previousLabel="Previous gallery image"
              nextLabel="Next gallery image"
              className="flex items-center gap-2"
            />
          </div>
        </div>

        <div className="mt-5 flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center bg-white">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 768px) 92vw, 1100px"
              className="h-auto max-h-full w-auto max-w-full object-contain"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-neutral-700">{item.note}</p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
