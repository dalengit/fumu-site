import { type JSX } from "react";

interface GalleryNavButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  previousLabel: string;
  nextLabel: string;
  className?: string;
  buttonClassName?: string;
}

const defaultButtonClassName =
  "h-9 w-9 shrink-0 border border-black bg-white px-0 py-0 font-mono text-base leading-none text-black transition-colors hover:bg-black hover:text-white";

export function GalleryNavButtons({
  onPrevious,
  onNext,
  previousLabel,
  nextLabel,
  className,
  buttonClassName,
}: GalleryNavButtonsProps): JSX.Element {
  const mergedButtonClassName = buttonClassName ?? defaultButtonClassName;

  return (
    <div className={className ?? "flex items-center gap-2"}>
      <button
        type="button"
        onClick={onPrevious}
        aria-label={previousLabel}
        className={mergedButtonClassName}
      >
        &lt;
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={nextLabel}
        className={mergedButtonClassName}
      >
        &gt;
      </button>
    </div>
  );
}
