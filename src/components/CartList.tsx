'use client';
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartList() {
    const { cart, removeFromCart } = useCart();

    const total = cart.length * 100;

    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-xl text-gray-500 mb-6">Seu carrinho está vazio.</p>
                <Link href="/" className="btn btn--primary">
                    Voltar para Cursos
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <ul className="divide-y divide-gray-100">
                {cart.map((item, index) => (
                    <li key={index} className="py-4 flex justify-between items-center">
                        <span className="font-medium text-gray-800">{item}</span>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">R$ 100,00</span>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="text-red-500 hover:text-red-700 text-sm font-bold px-2 py-1 border border-red-100 rounded hover:bg-red-50 transition-colors"
                            >
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-green-600">
                    R$ {total.toFixed(2).replace('.', ',')}
                </span>
            </div>

            <button className="w-full mt-6 btn btn--accent btn--uppercase py-3 text-lg">
                Finalizar Compra
            </button>
        </div>
    );
}