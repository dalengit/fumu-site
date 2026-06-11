import type { JSX } from "react";
import Image from "next/image";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="anim-up grid grid-cols-1 gap-4 rounded-none px-2 py-2 sm:gap-6 sm:px-4 sm:py-3 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-5"
        >
            <div className="space-y-4 text-center lg:col-span-12">
                <div className="mascot-float mx-auto w-full max-w-[180px] sm:max-w-[260px] lg:max-w-[330px]">
                    <Image
                        src={`${publicBasePath}/assets/fumu_guy.png`}
                        alt="FUMU mascot"
                        width={330}
                        height={330}
                        className="h-auto w-full object-contain"
                    />
                </div>
                <h1 className="anim-up delay-3 mx-auto w-full font-sans text-[clamp(3.2rem,22vw,11rem)] font-black leading-none tracking-tighter sm:w-3/4">FUMU</h1>
                <p className="anim-up delay-4 mx-auto max-w-md text-sm sm:text-base">Small-batch Asian condiments.</p>
                <div className="anim-up delay-4 mx-auto flex w-full max-w-[280px] flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                    <button
                        type="button"
                        className="motion-lift w-full rounded-none bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:bg-black sm:w-auto"
                    >
                        Shop Drop
                    </button>
                    <button
                        type="button"
                        className="motion-lift w-full rounded-none px-4 py-2 font-sans font-black tracking-tighter transition-colors hover:bg-black hover:text-white sm:w-auto"
                    >
                        Join List
                    </button>
                </div>
            </div>
        </section>
    );
}