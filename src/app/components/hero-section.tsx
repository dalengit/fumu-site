import type { JSX } from "react";
import Image from "next/image";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="anim-up grid grid-cols-1 gap-8 rounded-none p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
        >
            <div className="space-y-6 text-center lg:col-span-12">
                <p className="anim-up delay-1 font-mono text-xs uppercase tracking-widest text-neutral-600">Craft Asian Foods</p>
                <div className="mascot-float mx-auto w-full max-w-[260px] sm:max-w-[320px]">
                    <Image
                        src="/assets/fumu_guy.png"
                        alt="FUMU mascot"
                        width={320}
                        height={320}
                        className="h-auto w-full object-contain"
                    />
                </div>
                <h1 className="anim-up delay-3 mx-auto w-3/4 font-sans text-[clamp(6rem,22vw,18rem)] font-black leading-none tracking-tighter">FUMU</h1>
                <p className="anim-up delay-4 mx-auto max-w-md text-base">Small-batch Asian condiments.</p>
                <div className="anim-up delay-4 flex flex-wrap justify-center gap-3">
                    <button
                        type="button"
                        className="motion-lift rounded-none bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:bg-black"
                    >
                        Shop Drop
                    </button>
                    <button
                        type="button"
                        className="motion-lift rounded-none px-4 py-2 font-sans font-black tracking-tighter transition-colors hover:bg-black hover:text-white"
                    >
                        Join List
                    </button>
                </div>
            </div>
        </section>
    );
}