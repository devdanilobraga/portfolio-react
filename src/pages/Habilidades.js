import './Habilidades.scss';
import { useState, useRef, useEffect } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGitAlt, FaWhatsapp, FaRobot, FaAngular, FaTelegramPlane,
} from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiSass, SiBootstrap, SiTypescript } from 'react-icons/si';

// ─── Dados ────────────────────────────────────────────────────────────────────
// nivel: 0–100  (aparece como barra de progresso)
const CATEGORIAS = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML5',      icon: <FaHtml5 />,      color: '#E34F26', nivel: 95, desc: 'Estrutura semântica e acessível' },
      { name: 'CSS3',       icon: <FaCss3Alt />,     color: '#1572B6', nivel: 90, desc: 'Estilização moderna e responsiva' },
      { name: 'SASS',       icon: <SiSass />,        color: '#CC6699', nivel: 85, desc: 'Pré-processador CSS modular' },
      { name: 'JavaScript', icon: <FaJsSquare />,    color: '#F7DF1E', nivel: 88, desc: 'Lógica, DOM e assincronismo' },
      { name: 'TypeScript', icon: <SiTypescript />,  color: '#3178C6', nivel: 70, desc: 'JS com tipagem estática' },
      { name: 'React',      icon: <FaReact />,       color: '#61DAFB', nivel: 85, desc: 'SPA, hooks e componentização' },
      { name: 'Angular',    icon: <FaAngular />,     color: '#DD0031', nivel: 72, desc: 'Framework TypeScript robusto' },
      { name: 'Bootstrap',  icon: <SiBootstrap />,   color: '#7952B3', nivel: 80, desc: 'Layouts responsivos rápidos' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: <FaNodeJs />,      color: '#339933', nivel: 80, desc: 'APIs REST e automações com JS' },
      { name: 'PostgreSQL', icon: <SiPostgresql />,  color: '#336791', nivel: 75, desc: 'Banco relacional escalável' },
      { name: 'MySQL',      icon: <SiMysql />,       color: '#4479A1', nivel: 78, desc: 'Modelagem e consultas SQL' },
      { name: 'REST APIs',  icon: <FaRobot />,       color: '#27ae60', nivel: 82, desc: 'Integração via HTTP' },
    ],
  },
  {
    id: 'automacao',
    label: 'Automação & Bots',
    skills: [
      { name: 'WhatsApp Bot', icon: <FaWhatsapp />,      color: '#25D366', nivel: 88, desc: 'Atendimentos automatizados' },
      { name: 'Telegram Bot', icon: <FaTelegramPlane />, color: '#0088cc', nivel: 80, desc: 'Bots via API Telegram' },
      { name: 'Automações',   icon: <FaRobot />,         color: '#9b59b6', nivel: 75, desc: 'Scripts e integrações' },
    ],
  },
  {
    id: 'ferramentas',
    label: 'Ferramentas',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt />, color: '#F05032', nivel: 85, desc: 'Versionamento e colaboração' },
    ],
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
function SkillCard({ name, icon, color, nivel, desc, visible }) {
  return (
    <div className={`skill-card ${visible ? 'visible' : ''}`}>
      <div className="skill-icon" style={{ color }}>
        {icon}
      </div>
      <div className="skill-info">
        <div className="skill-header">
          <span className="skill-name">{name}</span>
          <span className="skill-nivel" style={{ color }}>{nivel}%</span>
        </div>
        <div className="skill-bar-track">
          <div
            className="skill-bar-fill"
            style={{
              width: visible ? `${nivel}%` : '0%',
              background: `linear-gradient(90deg, ${color}99, ${color})`,
            }}
          />
        </div>
        <p className="skill-desc">{desc}</p>
      </div>
    </div>
  );
}

function Habilidades() {
  const [activeTab, setActiveTab] = useState(CATEGORIAS[0].id);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Anima barras quando a seção entra na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reinicia animação ao trocar de aba
  const handleTab = (id) => {
    if (id === activeTab) return;
    setVisible(false);
    setActiveTab(id);
    setTimeout(() => setVisible(true), 60);
  };

  const categoriaAtiva = CATEGORIAS.find((c) => c.id === activeTab);

  return (
    <section id="habilidades" className="habilidades" ref={sectionRef}>
      <div className="habilidades-container">

        {/* Título */}
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <h2 className="section-title">Minhas Habilidades</h2>
          <p className="section-sub">
            Tecnologias que uso para criar soluções completas do front ao back.
          </p>
        </div>

        {/* Abas */}
        <div className="tabs" role="tablist" aria-label="Categorias de habilidades">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => handleTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="skills-grid" role="tabpanel">
          {categoriaAtiva.skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Habilidades;