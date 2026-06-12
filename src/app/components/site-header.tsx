import type { JSX } from "react";
import Image from "next/image";
import { siteConfig } from "../site-config";

const navLinks = [
    { href: "#", label: "HOME", ariaLabel: "Scroll to top" },
    { href: "#photo-spotlight", label: "PRODUCTS", ariaLabel: "Jump to product spotlight section" },
    { href: "#about", label: "ABOUT" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" },
] as const;

export function SiteHeader(): JSX.Element {
    return (
        <header className="anim-in sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4 lg:px-16">
                <a href="#" aria-label="Scroll to top" className="flex items-center gap-2 font-sans text-2xl font-black tracking-tighter sm:gap-3 sm:text-3xl">
                    <Image
                        src={`${siteConfig.basePath}/assets/fumu_guy.png`}
                        alt="FUMU chilli oil mascot mark"
                        width={44}
                        height={44}
                        className="h-9 w-9 object-cover sm:h-11 sm:w-11"
                    />
                    FUMU
                </a>
                <nav aria-label="Primary" className="flex w-full flex-wrap items-center justify-center gap-1 sm:w-auto sm:justify-end sm:gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            aria-label={"ariaLabel" in link ? link.ariaLabel : `Jump to ${link.label.toLowerCase()} section`}
                            className={`motion-lift min-h-11 rounded-none px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors sm:min-h-0 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest ${
                                link.label === "PRODUCTS"
                                    ? "bg-red-700 text-white hover:bg-black"
                                    : "text-neutral-700 hover:bg-black hover:text-white"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

        </header>
    );
}