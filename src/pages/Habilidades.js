import './Habilidades.scss';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaWhatsapp, FaRobot, FaPython,
  FaAngular, FaTelegramPlane
} from 'react-icons/fa';

function Habilidades() {
  const habilidades = {
    'Frontend': [
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, desc: 'Estrutura semântica para web' },
      { name: 'CSS3 / SASS', icon: <FaCss3Alt color="#1572B6" />, desc: 'Estilização moderna e modular' },
      { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" />, desc: 'Lógica e interatividade' },
      { name: 'AJAX', icon: <FaJsSquare color="#F7DF1E" />, desc: 'Requisições assíncronas com JS' },
      { name: 'React', icon: <FaReact color="#61DAFB" />, desc: 'Interfaces dinâmicas e SPA' },
       { name: 'Angular', icon: <FaAngular color="#DD0031" />, desc: '' }
    ],
    'Backend': [
      { name: 'Python', icon: <FaPython color="#306998" />, desc: 'Automação e backend versátil' },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" />, desc: 'APIs e automações com JS' },
      { name: 'MySQL', icon: <FaDatabase color="#4479A1" />, desc: 'Modelagem e consultas de banco' },
    ],
    'Automação e Bots': [
      { name: 'Bots WhatsApp', icon: <FaWhatsapp color="#25D366" />, desc: 'Atendimentos e notificações' },
       { name: 'Bots Telegram', icon: <FaTelegramPlane color="#0088cc" /> },
      { name: 'Automações', icon: <FaRobot color="#9b59b6" />, desc: 'Scripts para tarefas repetitivas' },
    ],
    'Ferramentas': [
      { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" />, desc: 'Controle de versão e colaboração' },
    ]
  };

  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <h1>Minhas Habilidades</h1>

        {Object.entries(habilidades).map(([categoria, lista]) => (
          <div key={categoria} className="categoria">
            <h2>{categoria}</h2>
            <div className="skills-grid">
              {lista.map(({ name, icon, desc }) => (
                <div className="skill-card" key={name}>
                  <div className="icon">{icon}</div>
                  <span className="name">{name}</span>
                  <span className="desc">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
