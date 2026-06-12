"use client";

import { useEffect, useRef, useState, type JSX, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delayMs?: number;
    threshold?: number;
}

export function ScrollReveal({ children, className = "", delayMs = 0, threshold = 0.2 }: ScrollRevealProps): JSX.Element {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const target = elementRef.current;
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={elementRef}
            className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
            style={{ transitionDelay: `${delayMs}ms` }}
        >
            {children}
        </div>
    );
}