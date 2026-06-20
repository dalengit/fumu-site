"use client";

import { useState, type FormEvent, type JSX } from "react";
import { contactSectionContent } from "../data/site-content";

export function ContactSection(): JSX.Element {
    const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [submissionError, setSubmissionError] = useState<string>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setSubmissionState("sending");
        setSubmissionError("");

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${contactSectionContent.emailAddress}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            form.reset();
            setSubmissionState("success");
        } catch {
            setSubmissionState("error");
            setSubmissionError("Message did not send. Try again in a sec.");
        }
    };

    return (
        <>
            <section id="contact" className="mt-10 w-full rounded-none border border-black sm:mt-14 lg:mt-20 xl:mx-auto xl:w-[calc(50%+180px)]">
                <div className="border-b border-black px-4 py-4 sm:px-6">
                    <h2 className="font-sans text-xl font-black tracking-tighter sm:text-4xl">{contactSectionContent.heading}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="border-b border-black px-4 py-4 sm:px-6 sm:py-5 md:col-span-4 md:border-b-0 md:border-r">
                        <p className="mt-2 text-sm text-neutral-700">{contactSectionContent.locationText}</p>
                        <div className="mt-3 space-y-2">
                            <a
                                href={`mailto:${contactSectionContent.emailAddress}`}
                                aria-label={`Email FUMU at ${contactSectionContent.emailAddress}`}
                                className="motion-lift flex min-h-11 items-center rounded-none border border-black px-3 py-2 text-sm transition-colors hover:bg-black hover:text-white"
                            >
                                {contactSectionContent.emailLabel}
                            </a>
                            <a
                                href={contactSectionContent.instagramUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Visit FUMU on Instagram"
                                className="motion-lift flex min-h-11 items-center rounded-none border border-black px-3 py-2 text-sm transition-colors hover:bg-black hover:text-white"
                            >
                                {contactSectionContent.instagramLabel}
                            </a>
                        </div>
                    </div>

                    <form
                        action="https://formsubmit.co/fuchankee@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-3 px-4 py-4 sm:px-6 sm:py-5 md:col-span-8"
                    >
                        <input type="hidden" name="_subject" value={contactSectionContent.formSubject} />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                        <label className="block">
                            <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">{contactSectionContent.fields.nameLabel}</span>
                            <input
                                type="text"
                                name="name"
                                placeholder={contactSectionContent.fields.namePlaceholder}
                                required
                                className="w-full rounded-none border border-black bg-white px-3 py-2 text-sm text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">{contactSectionContent.fields.emailLabel}</span>
                            <input
                                type="email"
                                name="email"
                                placeholder={contactSectionContent.fields.emailPlaceholder}
                                required
                                className="w-full rounded-none border border-black bg-white px-3 py-2 text-sm text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors"
                            />
                        </label>
                        <label className="block">
                            <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-neutral-600">{contactSectionContent.fields.messageLabel}</span>
                            <textarea
                                name="message"
                                placeholder={contactSectionContent.fields.messagePlaceholder}
                                required
                                className="min-h-28 w-full rounded-none border border-black bg-white px-3 py-2 text-sm text-black placeholder:text-neutral-500 focus:border-red-600 focus:outline-none transition-colors"
                            />
                        </label>
                        <button
                            type="submit"
                            disabled={submissionState === "sending"}
                            className="motion-lift min-h-11 w-full rounded-none border border-red-700 bg-red-700 px-4 py-2 font-sans font-black tracking-tighter text-white transition-colors hover:border-black hover:bg-black disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                        >
                            {submissionState === "sending" ? "Sending heat..." : contactSectionContent.submitLabel}
                        </button>
                        {submissionState === "error" ? (
                            <p className="text-sm text-red-700" role="status">{submissionError}</p>
                        ) : null}
                    </form>
                </div>
            </section>

            {submissionState === "success" ? (
                <div
                    className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Message delivered"
                    onClick={() => setSubmissionState("idle")}
                >
                    <div
                        className="modal-panel w-full max-w-xl rounded-none border border-black bg-white p-6 text-black shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">Message delivered</p>
                        <h3 className="mt-2 font-sans text-2xl font-black tracking-tighter sm:text-3xl">You are in. We got it.</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                            Your message landed. We will get back to you soon.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <button
                                type="button"
                                onClick={() => setSubmissionState("idle")}
                                className="motion-lift min-h-11 rounded-none border border-black px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}