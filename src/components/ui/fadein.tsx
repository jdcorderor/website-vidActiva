import React from "react";
import { useEffect, useRef } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    ref.current.classList.add("fade-in");
                } else {
                    ref.current?.classList.remove("fade-in");
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
    
    return (
        <div ref={ref} className="opacity-1">
            {children}
        </div>
    )
}