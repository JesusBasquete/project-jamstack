import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero-section">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="heading-1">
                Apoio pra todas as fases do teu<br />negócio
              </h1>
              <p className="subtitle text-white mb-medium">
                Cursos, consultorias, e-books e muito conteúdo pra apoiar a tua jornada, não importa<br />o desafio.
              </p>
              <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <i className="fas fa-search search-icon" aria-hidden="true"></i>
                  <input type="search" placeholder="Busque por termo ou categoria" aria-label="Busca" />
                </div>
                <button type="submit" className="btn btn--accent btn--uppercase">Pesquisar</button>
              </form>
            </div>
            <div className="hero-image">
              <img
                className="apoio-imagem-png"
                src="/img/apoio-imagem-png0.png"
                alt="Mulher usando notebook e sorrindo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="courses-section container py-medium">
        <header className="mb-medium">
          <h2 className="heading-2">Cursos em destaque</h2>
          <p className="subtitle">Veja nossos cursos mais procurados e encontre o que o seu negócio precisa.</p>
        </header>

        <div className="category-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}