'use client';
import { useCart } from '@/context/CartContext';

export default function ToastNotification() {
    const { toast } = useCart();
    return (
        <div
            id="toast-notification"
            className={toast.visible ? 'active' : ''}
        >
            {toast.message}
        </div>
    );
}