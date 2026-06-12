import type { JSX } from "react";

export function SiteFooter(): JSX.Element {
    return (
        <footer className="mt-12 rounded-none px-4 py-4 sm:px-6 sm:py-5 lg:mt-24">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 sm:text-xs sm:tracking-widest">
                    Batch_004 | next drop 2026-06-21 09:00 UTC
                </p>
                <div className="flex flex-wrap items-center gap-2">
                    <a
                        href="#"
                        aria-label="Scroll to top"
                        className="motion-lift rounded-none px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                    >
                        Home
                    </a>
                </div>
            </div>
        </footer>
    );
}