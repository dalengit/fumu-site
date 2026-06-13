import type { JSX } from "react";
import { aboutSectionContent } from "../data/site-content";

export function AboutSection(): JSX.Element {
    return (
        <section id="about" className="mt-10 w-full scroll-mt-28 rounded-none sm:mt-14 sm:scroll-mt-24 lg:mt-20 xl:mx-auto xl:w-[calc(50%+180px)]">
            <div className="px-4 py-4 sm:px-6">
                <h2 className="font-sans text-2xl font-black tracking-tighter sm:text-4xl">{aboutSectionContent.heading}</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 px-4 py-4 sm:px-6 sm:py-5">
                <div className="space-y-3">
                    <p className="font-mono text-sm uppercase tracking-widest text-neutral-600 sm:text-base">{aboutSectionContent.whatWeMakeLabel}</p>
                    <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                        {aboutSectionContent.whatWeMakeText}
                    </p>
                </div>
                <div className="space-y-3">
                    <p className="font-mono text-sm uppercase tracking-widest text-neutral-600 sm:text-base">{aboutSectionContent.approachLabel}</p>
                    <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
                        {aboutSectionContent.approachText}
                    </p>
                </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3">
                {aboutSectionContent.highlights.map((item) => (
                    <li key={item.title} className="px-4 py-4 sm:px-6 sm:py-5">
                        <p className="font-sans text-xl font-black tracking-tighter sm:text-2xl">{item.title}</p>
                        <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}