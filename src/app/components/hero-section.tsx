import type { JSX } from "react";
import Image from "next/image";
import { siteConfig } from "../site-config";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="anim-up grid min-h-[calc(100svh-11rem)] grid-cols-1 content-center gap-3 rounded-none px-2 py-2 sm:min-h-[calc(100svh-10rem)] sm:gap-5 sm:px-4 sm:py-3 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-12 lg:gap-7 lg:px-8 lg:py-5"
        >
            <div className="relative space-y-4 text-center lg:col-span-12">
                <div className="mascot-float mx-auto w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[360px]">
                    <Image
                        src={`${siteConfig.basePath}/assets/fumu_guy.jpg`}
                        alt="FUMU chilli oil mascot logo"
                        width={480}
                        height={480}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>
                <h1 className="anim-up delay-3 mx-auto w-full font-sans text-[clamp(3.4rem,20vw,10.5rem)] font-black leading-none tracking-tighter sm:w-3/4">FUMU</h1>
                <p className="anim-up delay-4 mx-auto max-w-md text-sm sm:text-base">FUMU chilli oil, handmade in Manchester. Small-batch Asian condiments for bold everyday cooking.</p>
                <div className="anim-up delay-4 mx-auto flex w-full max-w-[280px] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                    <a
                        href="#photo-spotlight"
                        aria-label="Jump to product spotlight section"
                        className="motion-lift w-full rounded-none bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:bg-black sm:w-auto"
                    >
                        Explore the drop
                    </a>
                </div>
            </div>
        </section>
    );
}