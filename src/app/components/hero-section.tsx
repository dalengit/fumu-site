import type { JSX } from "react";
import Image from "next/image";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="anim-up grid grid-cols-1 gap-6 rounded-none px-6 py-4 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-5"
        >
            <div className="space-y-4 text-center lg:col-span-12">
                <div className="mascot-float mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[330px]">
                    <Image
                        src="/assets/fumu_guy.png"
                        alt="FUMU mascot"
                        width={330}
                        height={330}
                        className="h-auto w-full object-contain"
                    />
                </div>
                <h1 className="anim-up delay-3 mx-auto w-3/4 font-sans text-[clamp(4.75rem,16vw,11rem)] font-black leading-none tracking-tighter">FUMU</h1>
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