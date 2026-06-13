"use client";

import Image from "next/image";
import { useEffect, useState, type JSX } from "react";
import { headerNavLinks } from "../data/site-content";
import { siteConfig } from "../site-config";

const sectionIds = ["home", "photo-spotlight", "about", "gallery", "contact"] as const;

export function SiteHeader(): JSX.Element {
    const [activeHref, setActiveHref] = useState<string>("#");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length === 0) {
                    return;
                }

                const nextId = visibleEntries[0].target.id;
                if (!nextId) {
                    return;
                }

                setActiveHref(nextId === "home" ? "#" : `#${nextId}`);
            },
            {
                rootMargin: "-35% 0px -45% 0px",
                threshold: [0.15, 0.35, 0.6],
            },
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        const updateTopState = (): void => {
            if (window.scrollY <= 24) {
                setActiveHref("#");
            }
        };

        window.addEventListener("scroll", updateTopState, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", updateTopState);
        };
    }, []);

    return (
        <header className="anim-in sticky top-0 z-50 border-b border-black bg-white">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4 lg:px-16">
                <a href="#" aria-label="Scroll to top" className="flex items-center gap-2 font-sans text-2xl font-black tracking-tighter sm:gap-3 sm:text-3xl">
                    <Image
                        src={`${siteConfig.basePath}/assets/fumu_guy.jpg`}
                        alt="FUMU chilli oil mascot mark"
                        width={44}
                        height={44}
                        className="h-9 w-9 object-cover sm:h-11 sm:w-11"
                    />
                    FUMU
                </a>
                <nav aria-label="Primary" className="flex w-full flex-wrap items-center justify-center gap-1 sm:w-auto sm:justify-end sm:gap-2">
                    {headerNavLinks.map((link) => {
                        const isActive = activeHref === link.href;

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-label={"ariaLabel" in link ? link.ariaLabel : `Jump to ${link.label.toLowerCase()} section`}
                                aria-current={isActive ? "page" : undefined}
                                className={`motion-lift min-h-11 rounded-none px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors sm:min-h-0 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest ${isActive
                                    ? "bg-red-700 text-white hover:bg-black"
                                    : "text-neutral-700 hover:bg-black hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </nav>
            </div>

        </header>
    );
}