// src/hooks/useGSAPAnimations.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate elements when they scroll into view.
 * Usage: pass containerRef and it will auto-animate all [data-gsap] descendants.
 */
export function useScrollReveal(containerRef) {
    useEffect(() => {
        if (!containerRef?.current) return;

        const ctx = gsap.context(() => {
            // Fade-up for any element with data-gsap="fade-up"
            gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el) => {
                gsap.from(el, {
                    y: 50,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Stagger children with data-gsap="stagger"
            gsap.utils.toArray('[data-gsap="stagger"]').forEach((parent) => {
                gsap.from(parent.children, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    stagger: 0.1,
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: parent,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Scale-in for data-gsap="scale"
            gsap.utils.toArray('[data-gsap="scale"]').forEach((el) => {
                gsap.from(el, {
                    scale: 0.85,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'back.out(1.5)',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Slide-left for data-gsap="slide-left"
            gsap.utils.toArray('[data-gsap="slide-left"]').forEach((el) => {
                gsap.from(el, {
                    x: -60,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Slide-right for data-gsap="slide-right"
            gsap.utils.toArray('[data-gsap="slide-right"]').forEach((el) => {
                gsap.from(el, {
                    x: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: 'power3.out',
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
}

/**
 * Hero entrance animation — call once on mount.
 * Animates elements passed as an array of selectors/refs.
 */
export function useHeroAnimation(targets) {
    useEffect(() => {
        if (!targets?.length) return;
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        targets.forEach((target, i) => {
            tl.from(
                target,
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                },
                i * 0.15
            );
        });

        return () => tl.kill();
    }, []);
}
