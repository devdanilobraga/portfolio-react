import './Projetos.scss';
import projetos from './projetos.json';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

function ProjetoCard({ proj, visible, delay }) {
  return (
    <article
      className={`projeto-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Imagem */}
      <div className="card-image">
        <img src={proj.image} alt={proj.title} loading="lazy" />
        <span className="card-categoria">{proj.categoria}</span>
      </div>

      {/* Corpo */}
      <div className="card-body">
        <h3 className="card-title">{proj.title}</h3>
        <p className="card-desc">{proj.description}</p>

        <div className="card-footer">
          {/* Tecnologias */}
          <div className="tecnologias">
            {proj.technologies.map((tec, i) => (
              <span key={i} className="tec-tag">{tec}</span>
            ))}
          </div>

          {/* Links */}
          <div className="card-links">
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noreferrer" aria-label="Ver código no GitHub">
                <FaGithub />
                <span>Código</span>
              </a>
            )}
            <a href={proj.link} target="_blank" rel="noreferrer" aria-label="Ver projeto">
              <FaExternalLinkAlt />
              <span>Ver projeto</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [visible, setVisible]               = useState(false);
  const sectionRef                          = useRef(null);

  const categorias = ['Todos', ...new Set(projetos.map((p) => p.categoria))];

  const projetosFiltrados =
    categoriaAtiva === 'Todos'
      ? projetos
      : projetos.filter((p) => p.categoria === categoriaAtiva);

  // Anima ao entrar na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reanimação ao filtrar
  const handleFiltro = (cat) => {
    if (cat === categoriaAtiva) return;
    setVisible(false);
    setCategoriaAtiva(cat);
    setTimeout(() => setVisible(true), 60);
  };

  return (
    <section className="projetos" id="projetos" ref={sectionRef}>
      <div className="projetos-container">

        {/* Cabeçalho */}
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-sub">
            Uma seleção do que já construí — do front ao back.
          </p>
        </div>

        {/* Filtros */}
        <div className="filtros" role="group" aria-label="Filtrar projetos por categoria">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`filtro-btn ${categoriaAtiva === cat ? 'ativo' : ''}`}
              onClick={() => handleFiltro(cat)}
              aria-pressed={categoriaAtiva === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projetos-grid">
          {projetosFiltrados.map((proj, i) => (
            <ProjetoCard
              key={`${proj.title}-${i}`}
              proj={proj}
              visible={visible}
              delay={i * 60}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projetos;