import type { JSX } from "react";
import Image from "next/image";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#products", label: "PRODUCTS" },
    { href: "#contact", label: "CONTACT" },
] as const;

export function SiteHeader(): JSX.Element {
    return (
        <header className="anim-in sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-4 lg:px-16">
                <a href="#home" aria-label="Go to FUMU home section" className="flex items-center gap-2 font-sans text-2xl font-black tracking-tighter sm:gap-3 sm:text-3xl">
                    <Image
                        src={`${publicBasePath}/assets/fumu_guy.png`}
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
                            aria-label={`Jump to ${link.label.toLowerCase()} section`}
                            className="motion-lift min-h-11 rounded-none px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:bg-black hover:text-white sm:min-h-0 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        aria-label="Jump to contact for stock alerts"
                        className="motion-lift min-h-11 rounded-none bg-red-700 px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-black sm:min-h-0 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest"
                    >
                        STOCK ALERT
                    </a>
                </nav>
            </div>

        </header>
    );
}