// components/Header.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { cart, removeFromCart } = useCart();
    const [isDark, setIsDark] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.body.classList.add('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <header className="site-header">
            <div className="container">
                <div className="header-inner">
                    <Link href="/" className="site-logo">
                        <img src="/img/conhe-a-a-plataforma-oficial-de-produtos-do-sebrae-rs0.png" alt="Logo Sebrae RS" />
                    </Link>

                    <div className="header-actions">
                        <nav className="header-nav">
                            <ul>
                                <li><Link href="/" className="text-link active">Home</Link></li>
                                <li><Link href="#" className="text-link">Cursos e Eventos</Link></li>
                                <li><Link href="#" className="text-link">Blog</Link></li>
                                <li><Link href="#" className="text-link">Fale Conosco</Link></li>
                                <li><Link href="#" className="text-link">Encontre o SEBRAE</Link></li>
                            </ul>
                        </nav>
                        <button onClick={toggleTheme} className="btn btn--outline theme-toggle">
                            {isDark ? '🌙' : '🌞'}
                        </button>

                        <div className={`cart-trigger ${isCartOpen ? 'is-open' : ''}`} onClick={() => setIsCartOpen(!isCartOpen)}>
                            <img className="cart-icon" src="/img/component-40.svg" alt="Carrinho" />
                            <div className="cart-count">{cart.length}</div>
                            <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
                                {cart.length === 0 ? (
                                    <p className="text-small">Nenhum produto.</p>
                                ) : (
                                    <ul className="cart-item-list">
                                        {cart.map((item, index) => (
                                            <li key={index}>
                                                <span>{item}</span>
                                                <button className="btn-remove-item" onClick={() => removeFromCart(index)}>&times;</button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}