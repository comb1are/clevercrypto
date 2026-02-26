import { useState, useEffect, useRef } from "react";

export function useSliderObserver() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sliderRef.current) return;

        const options = {
            root: sliderRef.current,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            });
        }, options);

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return { activeIndex, setActiveIndex, sliderRef, cardsRef };
}
