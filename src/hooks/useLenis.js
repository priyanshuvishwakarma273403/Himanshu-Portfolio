// src/hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function getLenis() {
    return lenisInstance;
}

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.5,
        });

        lenisInstance = lenis;

        // Sync GSAP ScrollTrigger with Lenis scroll position
        lenis.on('scroll', ScrollTrigger.update);

        // Tick Lenis on every RAF frame
        const ticker = gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
}
