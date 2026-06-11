import type { JSX } from "react";

const aboutItems = ["Small-batch production", "Real ingredients", "Hand bottled"] as const;

export function AboutSection(): JSX.Element {
    return (
        <section id="about" className="mt-10 rounded-none">
            <div className="px-6 py-4">
                <h2 className="font-sans text-3xl font-black tracking-tighter">ABOUT</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3">
                {aboutItems.map((item) => (
                    <li key={item} className="px-6 py-6">
                        <p className="font-sans text-xl font-black tracking-tighter">{item}</p>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                            Built for bold flavor-first cooking, every batch is tuned for depth, texture, and everyday use.
                        </p>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2">
                <div className="space-y-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Our approach</p>
                    <p className="text-sm leading-relaxed text-neutral-700">
                        FUMU started as a tiny kitchen experiment and grew into a pantry staple brand focused on clean heat,
                        layered umami, and ingredients that hold up in real home cooking.
                    </p>
                </div>
                <div className="space-y-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">What we make</p>
                    <p className="text-sm leading-relaxed text-neutral-700">
                        From chili oils to fermented staples, each product is designed to mix and match across noodles, rice,
                        eggs, stir-fries, and snacks without overpowering the base dish.
                    </p>
                </div>
            </div>
        </section>
    );
}