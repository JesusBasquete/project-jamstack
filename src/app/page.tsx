import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import SearchForm from "@/components/SearchForm";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

export default function Home() {
  // --- LÓGICA DE FILTRAGEM ---
  const consultancies = courses.filter((item) =>
    item.title.toLowerCase().includes("consultoria") ||
    item.id.includes("consultoria")
  );

  const realCourses = courses.filter((item) =>
    !item.title.toLowerCase().includes("consultoria") &&
    !item.id.includes("consultoria")
  );

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
                Cursos, consultorias, e-books e muito conteúdo pra apoiar a tua jornada.
              </p>
              <SearchForm />
            </div>
            <div className="hero-image">
              <img className="apoio-imagem-png" src="/img/apoio-imagem-png0.png" alt="Mulher usando notebook" />
            </div>
          </div>
        </div>
      </section>

      <section className="category-section py-large">
        <div className="container">
          <header className="mb-large">
            <h2 className="heading-2">Sobre o que você quer aprender hoje?</h2>
          </header>
          <div className="category-grid">
            <a href="#" className="category-card">
              <img className="category-card__image" src="/img/mulhersorrindoenquantoutilizaumsmartphone0.png" alt="Marketing" />
              <div className="category-card__title-overlay">
                <h3 className="heading-3 category-card__title">Marketing e Vendas</h3>
              </div>
            </a>
            <a href="#" className="category-card">
              <img className="category-card__image" src="/img/pessoasorrindoenquantoutilizaumsmartphone0.png" alt="Mercado" />
              <div className="category-card__title-overlay">
                <h3 className="heading-3 category-card__title">Mercado</h3>
              </div>
            </a>
            <a href="#" className="category-card">
              <img className="category-card__image" src="/img/mulhersegurandoumacanetaenquantoolhaatentamente0.png" alt="Finanças" />
              <div className="category-card__title-overlay">
                <h3 className="heading-3 category-card__title">Finanças</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="courses-section container py-medium">
        <header className="mb-medium">
          <h2 className="heading-2">Cursos em destaque</h2>
          <p className="subtitle">Veja nossos cursos mais procurados.</p>
        </header>

        <Carousel>
          {realCourses.map((course) => (
            <div className="carousel__slide" key={course.id} style={{ minWidth: '300px' }}>
              <CourseCard course={course} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="consultancies-section container py-medium">
        <header className="mb-large">
          <h2 className="heading-2">Consultorias em destaque</h2>
        </header>

        <Carousel>
          {consultancies.map((consultancy) => (
            <div className="carousel__slide" key={consultancy.id} style={{ minWidth: '300px' }}>
              <CourseCard course={consultancy} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="themes-section py-large">
        <div className="container">
          <header className="mb-large">
            <h2 className="heading-2 text-white">Escolha seus Cursos ou Eventos pelo tema de interesse</h2>
          </header>
          <div className="themes-grid">
            <a href="#" className="theme-card">
              <img src="/img/para-forma-o-do-educador0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Formação do Educador</h3>
            </a>
            <a href="#" className="theme-card">
              <img src="/img/empreendedorismo0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Empreendedorismo</h3>
            </a>
            <a href="#" className="theme-card">
              <img src="/img/estrat-gia0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Estratégia</h3>
            </a>
            <a href="#" className="theme-card">
              <img src="/img/finan-as0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Finanças</h3>
            </a>
            <a href="#" className="theme-card">
              <img src="/img/inova-o0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Inovação</h3>
            </a>
            <a href="#" className="theme-card">
              <img src="/img/leis-e-normas0.png" className="theme-card__icon" alt="" />
              <h3 className="theme-card__title">Leis e Normas</h3>
            </a>
          </div>
        </div>
      </section>

      <section className="help-section container py-large">
        <div className="help-inner">
          <div className="help-image-container">
            <img src="/img/aqui-pra-ajudar-aspect-ratio-570-720-png0.png" alt="Mulher sorrindo" />
          </div>

          <div className="help-content">
            <h2 className="heading-2" style={{ textAlign: 'left' }}>
              Estamos aqui para te ajudar, não<br />importa o desafio.
            </h2>
            <p className="subtitle mb-medium" style={{ textAlign: 'left', color: '#6b7280' }}>
              Ficou com alguma dúvida? Chame a nossa equipe!
            </p>

            <div className="help-grid">
              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols0.svg" alt="Ícone Ajuda" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Precisa de ajuda?</h3>
                  <p className="help-card__subtitle">Fale com a gente</p>
                </div>
              </a>

              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols1.svg" alt="Ícone Consultoria" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Consultorias</h3>
                  <p className="help-card__subtitle">Atendimento personalizado</p>
                </div>
              </a>

              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols2.svg" alt="Ícone Cursos Gratuitos" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Cursos Gratuitos</h3>
                  <p className="help-card__subtitle">Confira o que separamos</p>
                </div>
              </a>

              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols3.svg" alt="Ícone Whatsapp" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Cursos Whatsapp</h3>
                  <p className="help-card__subtitle">Online, rápidos e gratuitos</p>
                </div>
              </a>

              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols4.svg" alt="Ícone Scanner" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Scanner</h3>
                  <p className="help-card__subtitle">Diagnóstico para sua empresa</p>
                </div>
              </a>

              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper">
                  <img src="/img/symbols5.svg" alt="Ícone Self Scanner" className="help-card__icon" />
                </div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Self Scanner</h3>
                  <p className="help-card__subtitle">Autodiagnóstico</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}