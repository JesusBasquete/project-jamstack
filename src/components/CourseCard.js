'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CourseCard({ course }) {
    const { addToCart } = useCart();

    return (
        <div className="course-card">
            <div className="course-card__figure">
                <img className="course-card__image" src={course.image} alt={course.title} />
                <span className="course-card__badge">Exclusivo</span>
            </div>
            <div className="course-card__content">
                <span className="course-card__category">{course.category}</span>
                <h3 className="course-card__title">{course.title}</h3>
                <div className="course-card__details">
                    <div className="course-card__detail-item">
                        <i className="fas fa-desktop" aria-hidden="true" style={{ color: '#9ca3af', width: '20px', textAlign: 'center' }}></i>
                        <span>{course.mode}</span>
                    </div>

                    <div className="course-card__detail-item">
                        <i className="far fa-clock" aria-hidden="true" style={{ color: '#9ca3af', width: '20px', textAlign: 'center' }}></i>
                        <span>{course.duration}</span>
                    </div>
                </div>
            </div>
            <div className="course-card__footer">
                <span className="course-card__price">{course.price}</span>
                <div className="course-card__actions">
                    <button onClick={() => addToCart(course.title)} className="btn btn--outline btn--add-cart">Adicionar</button>
                    <Link href={`/curso/${course.id}`} className="btn btn--primary">Saiba mais</Link>
                </div>
            </div>
        </div>
    );
}