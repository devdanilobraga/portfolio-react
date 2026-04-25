import './Sobre.scss';
import { useEffect, useRef, useState } from 'react';
import {
  FaReact, FaNodeJs, FaGitAlt, FaWhatsapp,
} from 'react-icons/fa';
import { SiPostgresql, SiSass, SiJavascript } from 'react-icons/si';
import { Download, MapPin, Briefcase, Code2 } from 'lucide-react';

// ─── Dados ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: '19+', label: 'Projetos entregues' },
  { value: '3+',  label: 'Anos de experiência' },
  { value: '1',   label: 'Sistemas em produção' },
];

const TECH_CHIPS = [
  { icon: <FaReact />,      name: 'React',      color: '#61DAFB' },
  { icon: <FaNodeJs />,     name: 'Node.js',    color: '#339933' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiSass />,       name: 'SASS',       color: '#CC6699' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
  { icon: <FaGitAlt />,     name: 'Git',        color: '#F05032' },
  { icon: <FaWhatsapp />,   name: 'Bots',       color: '#25D366' },
];

const INFO_ITEMS = [
  { icon: <MapPin size={15} />,    text: 'Rio de Janeiro, RJ' },
  { icon: <Briefcase size={15} />, text: 'Aberto a oportunidades' },
  { icon: <Code2 size={15} />,     text: 'Full Stack Developer' },
];

// ─── Animação de número ───────────────────────────────────────────────────────

function AnimatedStat({ value, label, visible }) {
  return (
    <div className={`stat-item ${visible ? 'visible' : ''}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

function Sobre() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="sobre" ref={sectionRef}>
      <div className="sobre-container">

        {/* Cabeçalho */}
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-sub">Desenvolvedor Full Stack apaixonado por criar soluções reais.</p>
        </div>

        {/* Layout principal */}
        <div className="sobre-grid">

          {/* Coluna esquerda — foto + info */}
          <aside className={`sobre-aside ${visible ? 'visible' : ''}`}>
            <div className="perfil-wrap">
              <img
                src="./assets/danilo-desenho.png"
                alt="Danilo Braga"
                className="perfil-img"
                loading="lazy"
              />
              <div className="perfil-ring" aria-hidden="true" />
            </div>

            <div className="info-list">
              {INFO_ITEMS.map((item, i) => (
                <div key={i} className="info-item">
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-text">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="./assets/curriculo-danilo.pdf"
              download
              className="btn-curriculo"
              aria-label="Baixar currículo"
            >
              <Download size={15} />
              Baixar currículo
            </a>
          </aside>

          {/* Coluna direita — texto + stats + chips */}
          <div className={`sobre-content ${visible ? 'visible' : ''}`}>

            {/* Texto */}
            <div className="sobre-texto">
              <p>
                Olá! Sou <strong>Danilo Braga</strong>, desenvolvedor{' '}
                <strong>Full Stack</strong> com foco em{' '}
                <strong>React</strong>, <strong>Node.js</strong> e{' '}
                <strong>SASS</strong>. Tenho paixão por criar interfaces modernas,
                responsivas e funcionais, sempre priorizando a melhor experiência
                para o usuário final.
              </p>
              <p>
                Já atuei em sistemas logísticos corporativos, ERPs em produção,
                bots para WhatsApp e Telegram, e plataformas SaaS — sempre com
                atenção à qualidade do código e ao resultado de negócio.
              </p>
              <p>
                Estou aberto a oportunidades, colaborações ou apenas um bom papo
                sobre tecnologia!
              </p>
            </div>

            {/* Stats */}
            <div className="stats-row">
              {STATS.map((s, i) => (
                <AnimatedStat key={i} {...s} visible={visible} />
              ))}
            </div>

            {/* Tech chips */}
            <div className="tech-chips">
              {TECH_CHIPS.map((t) => (
                <span key={t.name} className="chip">
                  <span className="chip-icon" style={{ color: t.color }}>{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;