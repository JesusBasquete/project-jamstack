'use client';
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
    courseTitle: string;
}

export default function AddToCartButton({ courseTitle }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    return (
        <button
            onClick={() => addToCart(courseTitle)}
            className="btn btn--primary btn--uppercase"
            style={{ padding: '12px 24px', fontSize: '16px' }}
        >
            Inscrever-se Agora
        </button>
    );
}