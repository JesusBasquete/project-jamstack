import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import SearchForm from "@/components/SearchForm";
import Carousel from "@/components/Carousel"; // Novo componente
import Footer from "@/components/Footer"; // Novo componente
import { courses } from "@/data/courses";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      {/* --- HERO SECTION --- */}
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

      {/* --- SEÇÃO CATEGORIAS (Grid Rápido) --- */}
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

      {/* --- CURSOS EM DESTAQUE (Agora com Carrossel) --- */}
      <section className="courses-section container py-medium">
        <header className="mb-medium">
          <h2 className="heading-2">Cursos em destaque</h2>
          <p className="subtitle">Veja nossos cursos mais procurados.</p>
        </header>

        {/* Usamos o componente Carousel aqui */}
        <Carousel>
          {courses.map((course) => (
            <div className="carousel__slide" key={course.id}>
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
          <div className="carousel__slide">
            <CourseCard course={{
              id: "consultoria-financas",
              title: "CONSULTORIA ONLINE - FINANÇAS",
              category: "Finanças",
              image: "/img/consultoria-online-finan-as-gest-o0.png",
              duration: "1h", mode: "Online", price: "Gratuito"
            }} />
          </div>
          <div className="carousel__slide">
            <CourseCard course={{
              id: "consultoria-estrategia",
              title: "CONSULTORIA ONLINE - ESTRATÉGIA",
              category: "Estratégia",
              image: "/img/consultoria-online-estrat-gia-gest-o0.png",
              duration: "1h", mode: "Online", price: "Gratuito"
            }} />
          </div>
          <div className="carousel__slide">
            <CourseCard course={{
              id: "consultoria-mkt",
              title: "CONSULTORIA ONLINE - MARKETING",
              category: "Marketing",
              image: "/img/consultoria-online-marketing-e-vendas-gest-o0.png",
              duration: "1h", mode: "Online", price: "Gratuito"
            }} />
          </div>
        </Carousel>
      </section>

      <section className="themes-section py-large">
        <div className="container">
          <header className="mb-large">
            <h2 className="heading-2 text-white">Escolha seus Cursos ou Eventos pelo tema de interesse</h2>
          </header>
          <div className="themes-grid">
            <a href="#" className="theme-card">
              <i className="fas fa-graduation-cap theme-card__icon" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
              <h3 className="theme-card__title">Formação do Educador</h3>
            </a>
            <a href="#" className="theme-card">
              <i className="fas fa-briefcase theme-card__icon" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
              <h3 className="theme-card__title">Empreendedorismo</h3>
            </a>
            <a href="#" className="theme-card">
              <i className="fas fa-chart-line theme-card__icon" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
              <h3 className="theme-card__title">Estratégia</h3>
            </a>
            <a href="#" className="theme-card">
              <i className="fas fa-coins theme-card__icon" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
              <h3 className="theme-card__title">Finanças</h3>
            </a>
            <a href="#" className="theme-card">
              <i className="fas fa-lightbulb theme-card__icon" style={{ fontSize: '40px', marginBottom: '10px' }}></i>
              <h3 className="theme-card__title">Inovação</h3>
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
            <h2 className="heading-2" style={{ textAlign: 'left' }}>Estamos aqui para te ajudar.</h2>
            <div className="help-grid">
              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper"><i className="fas fa-headset"></i></div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Fale com a gente</h3>
                </div>
              </a>
              <a href="#" className="help-card">
                <div className="help-card__icon-wrapper"><i className="fas fa-comments"></i></div>
                <div className="help-card__text-wrapper">
                  <h3 className="help-card__title">Consultorias</h3>
                </div>
              </a>
              {/* Adicione os outros cards aqui... */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}