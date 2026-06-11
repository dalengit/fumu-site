import type { JSX } from "react";

export function SiteFooter(): JSX.Element {
    return (
        <footer className="mt-10 rounded-none px-6 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
                    Batch_004 // next drop 2026-06-21 09:00 UTC
                </p>
                <div className="flex items-center gap-2">
                    <a
                        href="#"
                        className="rounded-none px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                    >
                        Terms
                    </a>
                    <a
                        href="#"
                        className="rounded-none px-3 py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                    >
                        Privacy
                    </a>
                </div>
            </div>
        </footer>
    );
}