import Header from "@/components/Header";
import { courses } from "@/data/courses";

export const revalidate = 60;
export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id,
    }));
}

export default function CursoDetalhes({ params }: { params: { id: string } }) {
    const course = courses.find((c) => c.id === params.id);

    if (!course) {
        return (
            <main>
                <Header />
                <div className="container py-large text-center">
                    <h1>Curso não encontrado</h1>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Header />
            <div className="container py-large">
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <img
                            src={course.image}
                            alt={course.title}
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(12,24,60,0.1)' }}
                        />
                    </div>

                    <div style={{ flex: '1 1 400px' }}>
                        <span className="course-card__badge" style={{ position: 'static', marginBottom: '16px', display: 'inline-block' }}>
                            {course.category}
                        </span>

                        <h1 className="heading-2" style={{ fontSize: '32px', marginBottom: '16px' }}>
                            {course.title}
                        </h1>

                        <p className="subtitle" style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                            {course.description}
                        </p>

                        <div className="course-card__details" style={{ marginBottom: '30px', fontSize: '16px' }}>
                            <div className="course-card__detail-item">
                                <i className="fas fa-desktop" style={{ color: '#2b45ff' }}></i>
                                <strong>Modalidade:</strong> {course.mode}
                            </div>
                            <div className="course-card__detail-item" style={{ marginLeft: '20px' }}>
                                <i className="far fa-clock" style={{ color: '#2b45ff' }}></i>
                                <strong>Duração:</strong> {course.duration}
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#11a25a' }}>
                                {course.price}
                            </span>
                            <button className="btn btn--primary btn--uppercase">
                                Inscrever-se Agora
                            </button>
                        </div>

                        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                        <small style={{ color: '#999' }}>
                            ID do Curso: {params.id} <br />
                            Renderização: ISR (Revalidação a cada 60s)
                        </small>
                    </div>
                </div>
            </div>
        </main>
    );
}