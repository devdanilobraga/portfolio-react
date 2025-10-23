import './Projetos.scss';
import projetos from './projetos.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

function Projetos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // categorias únicas
  const categorias = ['Todos', ...new Set(projetos.map(p => p.categoria))];

  // filtro
  const projetosFiltrados = categoriaSelecionada === 'Todos'
    ? projetos
    : projetos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <section className="projetos" id="projetos">
      <h2>Meus Projetos</h2>

      <div className="filtros">
        {categorias.map((cat, i) => (
          <button
            key={i}
            className={categoriaSelecionada === cat ? 'ativo' : ''}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projetos-grid">
        {projetosFiltrados.map((proj, index) => (
          <div className="projeto-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <p>{proj.description}</p>
            <div className="categoria">
              <span>{proj.categoria}</span>
            </div>
            <h3>{proj.title}</h3>
            <div className="tecnologias">
              {proj.technologies.map((tec, i) => (
                <span key={i}>{tec}</span>
              ))}
            </div>
            <div className="links">
              <a href={proj.link} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
