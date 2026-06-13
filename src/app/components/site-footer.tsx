import type { JSX } from "react";
import { footerContent } from "../data/site-content";

export function SiteFooter(): JSX.Element {
    return (
        <footer className="mt-10 rounded-none px-4 py-4 sm:px-6 sm:py-4 lg:mt-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 sm:text-xs sm:tracking-widest">
                    {footerContent.batchText}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    <a
                        href="#"
                        aria-label="Scroll to top"
                        className="motion-lift rounded-none px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                    >
                        {footerContent.homeLabel}
                    </a>
                </div>
            </div>
        </footer>
    );
}