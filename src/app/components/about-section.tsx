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
                    </li>
                ))}
            </ul>
        </section>
    );
}