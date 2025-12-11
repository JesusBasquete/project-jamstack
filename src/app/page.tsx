import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import SearchForm from "@/components/SearchForm";
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
              <SearchForm />
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