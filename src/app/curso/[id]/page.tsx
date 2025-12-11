import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Adicionei o Footer para ficar completo
import { courses } from "@/data/courses";

// 1. Configuração ISR
export const revalidate = 60;

// 2. generateStaticParams (SSG Híbrido)
export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id,
    }));
}

// 3. Componente da Página
// NOTA: Adicionamos 'async' e tipamos params como Promise
export default async function CursoDetalhes({ params }: { params: Promise<{ id: string }> }) {

    // CORREÇÃO NEXT.JS 15: Aguardamos os parâmetros antes de usar
    const { id } = await params;

    // Busca o curso correspondente ao ID resolvido
    const course = courses.find((c) => c.id === id);

    // Se não encontrar, mostra erro
    if (!course) {
        return (
            <main>
                <Header />
                <div className="container py-large text-center" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <h1 className="heading-2" style={{ marginBottom: '20px' }}>Curso não encontrado 😕</h1>
                        <p className="subtitle">Verifique se o endereço está correto ou volte para a home.</p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Header />

            <div className="container py-large">
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

                    {/* Imagem do Curso */}
                    <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                        <img
                            src={course.image}
                            alt={course.title}
                            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(12,24,60,0.1)', display: 'block' }}
                        />
                    </div>

                    {/* Informações */}
                    <div style={{ flex: '1 1 400px' }}>
                        <span className="course-card__badge" style={{ position: 'static', marginBottom: '16px', display: 'inline-block' }}>
                            {course.category}
                        </span>

                        <h1 className="heading-2" style={{ fontSize: '32px', marginBottom: '16px', lineHeight: '1.2' }}>
                            {course.title}
                        </h1>

                        {/* Descrição: Se não existir no objeto, usamos um texto padrão */}
                        <p className="subtitle" style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
                            {course.description || "Aproveite este conteúdo exclusivo do Sebrae para impulsionar o seu negócio. Inscreva-se para ter acesso completo."}
                        </p>

                        {/* Detalhes com ícones */}
                        <div className="course-card__details" style={{ marginBottom: '30px', fontSize: '16px', display: 'flex', gap: '20px' }}>
                            <div className="course-card__detail-item">
                                <i className="fas fa-desktop" style={{ color: '#2b45ff', marginRight: '8px' }}></i>
                                <strong>{course.mode}</strong>
                            </div>
                            <div className="course-card__detail-item">
                                <i className="far fa-clock" style={{ color: '#2b45ff', marginRight: '8px' }}></i>
                                <strong>{course.duration}</strong>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#11a25a' }}>
                                {course.price}
                            </span>
                            {/* Botão de ação apenas visual aqui */}
                            <button className="btn btn--primary btn--uppercase" style={{ padding: '12px 24px', fontSize: '16px' }}>
                                Inscrever-se Agora
                            </button>
                        </div>

                        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />

                        <small style={{ color: '#999', display: 'block' }}>
                            ID: {id} <br />
                            Tipo de Renderização: ISR (Incremental Static Regeneration)
                        </small>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}