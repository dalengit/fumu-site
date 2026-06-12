import type { JSX } from "react";

export function ContactSection(): JSX.Element {
    return (
        <section id="contact" className="mt-12 w-full rounded-none border border-black sm:mt-16 lg:mt-24 xl:mx-auto xl:w-[calc(50%+200px)]">
            <div className="border-b border-black px-4 py-4 sm:px-6">
                <h2 className="font-sans text-2xl font-black tracking-tighter sm:text-3xl">CONTACT</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="border-b border-black px-4 py-5 sm:px-6 sm:py-6 md:col-span-4 md:border-b-0 md:border-r">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Direct</p>
                    <p className="mt-2 text-sm text-neutral-700">FUMU Manchester, UK | Asian condiments Manchester</p>
                    <div className="mt-3 space-y-2">
                        <a
                            href="mailto:hello@fumu.co"
                            aria-label="Email FUMU at hello@fumu.co"
                            className="motion-lift flex min-h-11 items-center rounded-none border border-black px-3 py-2 text-sm transition-colors hover:bg-black hover:text-white"
                        >
                            hello@fumu.co
                        </a>
                        <a
                            href="https://www.instagram.com/fumu.chilli/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit FUMU on Instagram"
                            className="motion-lift flex min-h-11 items-center rounded-none border border-black px-3 py-2 text-sm transition-colors hover:bg-black hover:text-white"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <form className="grid grid-cols-1 gap-3 px-4 py-5 sm:px-6 sm:py-6 md:col-span-8">
                    <label className="block">
                        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">Name</span>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-none border border-black bg-white px-3 py-3 text-base text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors md:py-2 md:text-sm"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">Email</span>
                        <input
                            type="email"
                            placeholder="you@domain.com"
                            className="w-full rounded-none border border-black bg-white px-3 py-3 text-base text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors md:py-2 md:text-sm"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">Message</span>
                        <textarea
                            placeholder="Wholesale, collabs, press"
                            className="min-h-32 w-full rounded-none border border-black bg-white px-3 py-3 text-base text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors md:min-h-28 md:py-2 md:text-sm"
                        />
                    </label>
                    <button
                        type="button"
                        className="motion-lift min-h-11 w-full rounded-none border border-red-700 bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:border-black hover:bg-black md:w-auto"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}