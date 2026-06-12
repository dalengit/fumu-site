import type { JSX } from "react";
import { siteConfig } from "../site-config";

export default function ThanksPage(): JSX.Element {
    return (
        <main className="mx-auto flex min-h-[60svh] w-full max-w-[1600px] items-center px-4 py-10 sm:px-8 lg:px-16">
            <section className="w-full border border-black px-4 py-6 sm:px-6 sm:py-8 lg:max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Message sent</p>
                <h1 className="mt-2 font-sans text-2xl font-black tracking-tighter sm:text-4xl">Thanks for reaching out.</h1>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                    We have received your message and will get back to you soon.
                </p>
                <a
                    href={`${siteConfig.basePath}/`}
                    aria-label="Return to homepage"
                    className="motion-lift mt-5 inline-flex min-h-11 items-center rounded-none border border-black px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                >
                    Back to home
                </a>
            </section>
        </main>
    );
}
