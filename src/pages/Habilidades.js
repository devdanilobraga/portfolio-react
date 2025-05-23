import './Habilidades.scss';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaWhatsapp } from 'react-icons/fa';

function Habilidades() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3 / SASS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Bots WhatsApp', icon: <FaWhatsapp color="#25D366" /> },
  ];

  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <h1>Minhas Habilidades</h1>
        <div className="skills-grid">
          {skills.map(({ name, icon }) => (
            <div className="skill-card" key={name}>
              <div className="icon">{icon}</div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
