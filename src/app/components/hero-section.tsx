import type { JSX } from "react";
import Image from "next/image";
import fumuGuy from "../../../assets/fumu_guy.png";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="grid grid-cols-1 gap-8 rounded-none p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
        >
            <div className="space-y-6 text-center lg:col-span-12">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Craft Asian Foods</p>
                <div className="mx-auto w-full max-w-[220px] sm:max-w-[280px]">
                    <Image src={fumuGuy} alt="FUMU mascot" className="h-auto w-full object-contain" priority />
                </div>
                <h1 className="mx-auto w-3/4 font-sans text-[clamp(6rem,22vw,18rem)] font-black leading-none tracking-tighter">FUMU</h1>
                <p className="mx-auto max-w-md text-base">Small-batch Asian condiments.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        type="button"
                        className="rounded-none bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:bg-black"
                    >
                        Shop Drop
                    </button>
                    <button
                        type="button"
                        className="rounded-none px-4 py-2 font-sans font-black tracking-tighter transition-colors hover:bg-black hover:text-white"
                    >
                        Join List
                    </button>
                </div>
            </div>
        </section>
    );
}