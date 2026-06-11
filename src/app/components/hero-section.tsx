import type { JSX } from "react";

export function HeroSection(): JSX.Element {
    return (
        <section
            id="home"
            className="grid grid-cols-1 gap-8 rounded-none p-6 lg:grid-cols-12 lg:gap-10 lg:p-8"
        >
            <div className="space-y-6 lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Independent chili oil</p>
                <h1 className="font-sans text-6xl font-black leading-none tracking-tighter sm:text-7xl">FUMU</h1>
                <p className="max-w-md text-base">Small-batch chili oil.</p>
                <div className="flex flex-wrap gap-3">
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

            <div className="rounded-none p-2 lg:col-span-7">
                <div className="aspect-[21/8] w-full overflow-hidden rounded-none bg-neutral-100">
                    <img src="/fumu-hero-grit.svg" alt="FUMU wide-angle label texture" className="h-full w-full object-cover" />
                </div>
            </div>
        </section>
    );
}