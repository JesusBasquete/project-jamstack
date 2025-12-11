'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        const initScrollReveal = () => {
            const STAGGER_MS = 80;
            const targets = Array.from(document.querySelectorAll('section, .reveal-on-scroll'));

            if (!targets.length) return;

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target as HTMLElement;

                    if (el.dataset._revealGroup === 'true') {
                        const children = Array.from(el.querySelectorAll(':scope > *'));
                        children.forEach(child => child.classList.add('is-visible'));
                    } else {
                        el.classList.add('is-visible');
                    }

                    obs.unobserve(el);
                });
            }, {
                root: null,
                rootMargin: '0px 0px -100px 0px',
                threshold: 0.1
            });

            targets.forEach(el => {
                const element = el as HTMLElement;
                const children = Array.from(element.querySelectorAll(':scope > *'));

                if (children.length > 1) {
                    element.dataset._revealGroup = 'true';

                    children.forEach((child, i) => {
                        const childEl = child as HTMLElement;
                        if (!childEl.classList.contains('reveal')) {
                            childEl.classList.add('reveal');
                        }
                        childEl.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`);
                    });
                } else {
                    if (!element.classList.contains('reveal')) {
                        element.classList.add('reveal');
                    }
                }

                observer.observe(element);
            });
        };

        initScrollReveal();

    }, []);

    return null;
}