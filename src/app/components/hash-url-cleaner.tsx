"use client";

import { useEffect } from "react";

export function HashUrlCleaner(): null {
    useEffect(() => {
        const cleanUrl = (): string => `${window.location.pathname}${window.location.search}`;

        const clearHashFromUrl = (): void => {
            if (!window.location.hash) {
                return;
            }

            window.history.replaceState(window.history.state, "", cleanUrl());
        };

        const handleDocumentClick = (event: MouseEvent): void => {
            if (!(event.target instanceof Element)) {
                return;
            }

            const anchor = event.target.closest("a[href^='#']") as HTMLAnchorElement | null;
            if (!anchor) {
                return;
            }

            const href = anchor.getAttribute("href") ?? "";
            if (!href.startsWith("#")) {
                return;
            }

            event.preventDefault();

            if (href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetId = href.slice(1);
                const target = document.getElementById(targetId);
                if (!target) {
                    return;
                }

                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            window.history.replaceState(window.history.state, "", cleanUrl());
        };

        clearHashFromUrl();
        window.addEventListener("hashchange", clearHashFromUrl);
        document.addEventListener("click", handleDocumentClick);

        return () => {
            window.removeEventListener("hashchange", clearHashFromUrl);
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return null;
}