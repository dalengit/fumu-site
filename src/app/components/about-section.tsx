import type { JSX } from "react";

const aboutItems = ["Small-batch production", "Real ingredients", "Hand bottled"] as const;

export function AboutSection(): JSX.Element {
    return (
        <section id="about" className="mt-12 w-full scroll-mt-32 rounded-none sm:mt-16 sm:scroll-mt-24 lg:mt-24 xl:mx-auto xl:w-[calc(50%+200px)]">
            <div className="px-4 py-4 sm:px-6">
                <h2 className="font-sans text-3xl font-black tracking-tighter sm:text-5xl">ABOUT</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 px-4 py-5 sm:px-6 sm:py-6">
                <div className="space-y-3">
                    <p className="font-mono text-base uppercase tracking-widest text-neutral-600 sm:text-lg">What we make</p>
                    <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                        From FUMU chilli oil to fermented staples, these small-batch chilli oil UK drops are handmade in
                        Manchester for noodles, rice, eggs, stir-fries, and snacks.
                    </p>
                </div>
                <div className="space-y-3">
                    <p className="font-mono text-base uppercase tracking-widest text-neutral-600 sm:text-lg">Our approach</p>
                    <p className="text-lg leading-relaxed text-neutral-700 sm:text-xl">
                        FUMU started as a tiny kitchen experiment and grew into artisan chilli oil Manchester cooks reach for:
                        clean heat, layered umami, and ingredients that hold up in real home cooking.
                    </p>
                </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3">
                {aboutItems.map((item) => (
                    <li key={item} className="px-4 py-5 sm:px-6 sm:py-6">
                        <p className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">{item}</p>
                        <p className="mt-3 text-lg leading-relaxed text-neutral-700 sm:text-xl">
                            Built for bold flavour-first cooking, every batch is tuned for depth, texture, and everyday use.
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}