'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const { cart, removeFromCart, isCartOpen, toggleCart, setIsCartOpen } = useCart();
    const [isDark, setIsDark] = useState(false);

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
                    <Link href="/" className="site-logo" aria-label="Página inicial Sebrae RS">
                        <img
                            className="conhe-a-a-plataforma-oficial-de-produtos-do-sebrae-rs"
                            src="/img/conhe-a-a-plataforma-oficial-de-produtos-do-sebrae-rs0.png"
                            alt="Logo Sebrae RS"
                        />
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

                        <button
                            id="toggleTheme"
                            className="btn btn--outline theme-toggle"
                            aria-label="Alternar tema"
                            onClick={toggleTheme}
                        >
                            <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
                        </button>

                        <div
                            className={`cart-trigger ${isCartOpen ? 'is-open' : ''}`}
                            onClick={toggleCart}
                        >
                            <img className="cart-icon" src="/img/component-40.svg" alt="Carrinho de compras" />
                            <div className="cart-count">{cart.length}</div>

                            <div
                                className="cart-popup"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {cart.length === 0 ? (
                                    <p className="text-small">Nenhum produto no seu carrinho.</p>
                                ) : (
                                    <>
                                        <ul className="cart-item-list">
                                            {cart.map((item, index) => (
                                                <li key={index}>
                                                    <span>{item}</span>
                                                    <button
                                                        className="btn-remove-item"
                                                        onClick={() => removeFromCart(index)}
                                                        title="Remover item"
                                                    >
                                                        &times;
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                                            <Link
                                                href="/carrinho"
                                                className="btn btn--primary btn--uppercase"
                                                style={{ width: '100%', display: 'block', textAlign: 'center', fontSize: '13px' }}
                                                onClick={() => setIsCartOpen(false)}
                                            >
                                                Ver Carrinho Completo
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="header-buttons">
                        <button className="btn btn--outline">Login</button>
                        <button className="btn btn--primary">Cadastrar</button>
                    </div>
                </div>
            </div>
        </header>
    );
}