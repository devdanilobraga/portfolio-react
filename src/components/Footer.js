import './Footer.scss';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
       <div className="social-icons">
          <a href="https://www.linkedin.com/in/danilo-braga-785b70136/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/devdanilobraga" target="_blank" rel="noopener noreferrer" className="icon-link github">
            <FaGithub />
          </a>
          <a href="https://wa.me/5521998766007" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp">
            <FaWhatsapp />
          </a>
          <a href="mailto:danilobragam@gmail.com" className="icon-link email">
            <FaEnvelope />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Danilo Braga. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}





export default Footer;
