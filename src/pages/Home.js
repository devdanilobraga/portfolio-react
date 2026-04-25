import './Home.scss';
import { ArrowDown } from 'lucide-react';

function Home({ scrollToSection, sobreRef, projetosRef }) {
  return (
    <section id="home" className="home">

      {/* Efeito de texto com imagem animada */}
      <div className="home-logo">
        <h1 className="home-title">
          <span className="home-name">Danilo Braga</span>
          <span className="home-role">Desenvolvedor Web</span>
        </h1>
      </div>

      {/* CTAs */}
      <div className="home-cta">
        <button
          className="cta-primary"
          onClick={() => scrollToSection(projetosRef)}
        >
          Ver projetos
        </button>
        <button
          className="cta-secondary"
          onClick={() => scrollToSection(sobreRef)}
        >
          Sobre mim
        </button>
      </div>

      {/* Scroll hint */}
      <button
        className="scroll-hint"
        onClick={() => scrollToSection(sobreRef)}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={20} />
      </button>

    </section>
  );
}

export default Home;