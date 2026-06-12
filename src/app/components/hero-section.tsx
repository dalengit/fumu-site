import type { JSX } from "react";
import Image from "next/image";
import { siteConfig } from "../site-config";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="anim-up grid min-h-[calc(100svh-9rem)] grid-cols-1 content-center gap-4 rounded-none px-2 py-2 sm:min-h-[calc(100svh-8rem)] sm:gap-6 sm:px-4 sm:py-3 lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-5"
        >
            <div className="relative -translate-y-2 space-y-4 text-center sm:-translate-y-4 lg:col-span-12 lg:-translate-y-6">
                <div className="mascot-float mx-auto w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[430px]">
                    <Image
                        src={`${siteConfig.basePath}/assets/fumu_guy.png`}
                        alt="FUMU chilli oil mascot logo"
                        width={480}
                        height={480}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>
                <h1 className="anim-up delay-3 mx-auto w-full font-sans text-[clamp(4.2rem,26vw,13.8rem)] font-black leading-none tracking-tighter sm:w-3/4">FUMU</h1>
                <p className="anim-up delay-4 mx-auto max-w-md text-sm sm:text-base">FUMU chilli oil, handmade in Manchester. Small-batch Asian condiments for bold everyday cooking.</p>
                <div className="anim-up delay-4 mx-auto flex w-full max-w-[280px] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                    <a
                        href="#about"
                        aria-label="Read the FUMU brand story"
                        className="motion-lift w-full rounded-none bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:bg-black sm:w-auto"
                    >
                        Read Our Story
                    </a>
                </div>
            </div>
        </section>
    );
}