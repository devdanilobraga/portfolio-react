import './Projetos.scss';
import projetos from './projetos.json';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((proj, index) => (
          <div className="projeto-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
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
