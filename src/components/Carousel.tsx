'use client';
import { useState, useRef } from 'react';

export default function Carousel({ children }: { children: React.ReactNode }) {
    const [current, setCurrent] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const totalSlides = Array.isArray(children) ? children.length : 1;

    const next = () => {
        setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    return (
        <div className="carousel">
            <div className="carousel__controls">
                <button onClick={prev} className="carousel__button carousel__button--prev" aria-label="Anterior">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={next} className="carousel__button carousel__button--next" aria-label="Próximo">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div className="carousel__viewport">
                <div
                    className="carousel__track"
                    ref={trackRef}
                    style={{
                        transform: `translateX(-${current * 320}px)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}