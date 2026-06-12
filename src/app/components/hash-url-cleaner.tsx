"use client";

import { useEffect } from "react";

export function HashUrlCleaner(): null {
    useEffect(() => {
        const clearHashFromUrl = (): void => {
            if (!window.location.hash) {
                return;
            }

            const cleanUrl = `${window.location.pathname}${window.location.search}`;
            window.history.replaceState(window.history.state, "", cleanUrl);
        };

        clearHashFromUrl();
        window.addEventListener("hashchange", clearHashFromUrl);

        return () => {
            window.removeEventListener("hashchange", clearHashFromUrl);
        };
    }, []);

    return null;
}