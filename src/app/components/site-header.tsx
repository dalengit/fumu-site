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
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
                <a href="#home" className="flex items-center gap-3 font-sans text-3xl font-black tracking-tighter">
                    <Image
                        src={`${publicBasePath}/assets/fumu_guy.png`}
                        alt="FUMU mascot"
                        width={44}
                        height={44}
                        className="h-11 w-11 object-cover"
                    />
                    FUMU
                </a>
                <nav className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="motion-lift rounded-none px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-700 transition-colors hover:bg-black hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="motion-lift rounded-none bg-red-700 px-3 py-1 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-black"
                    >
                        STOCK ALERT
                    </a>
                </nav>
            </div>
        </header>
    );
}