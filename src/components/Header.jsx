import './Header.scss';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Header({ scrollToSection, homeRef, sobreRef, habilidadesRef, projetosRef, contatoRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.header')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''} always-visible`}>
          <ul>
            <li><button onClick={() => { scrollToSection(homeRef); setMenuOpen(false); }}>Início</button></li>
            <li><button onClick={() => { scrollToSection(sobreRef); setMenuOpen(false); }}>Sobre</button></li>
            <li><button onClick={() => { scrollToSection(habilidadesRef); setMenuOpen(false); }}>Habilidades</button></li>
            <li><button onClick={() => { scrollToSection(projetosRef); setMenuOpen(false); }}>Projetos</button></li>
            <li><button onClick={() => { scrollToSection(contatoRef); setMenuOpen(false); }}>Contato</button></li>
          </ul>

          {/* Adiciona aqui os ícones sociais */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/danilo-braga-785b70136/" target="_blank" rel="noopener noreferrer" className="icon-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/devdanilobraga" target="_blank" rel="noopener noreferrer" className="icon-link github">
              <FaGithub />
            </a>
            <a href="https://wa.me/5521971536909" target="_blank" rel="noopener noreferrer" className="icon-link whatsapp">
              <FaWhatsapp />
            </a>
            <a href="mailto:danilobragam@gmail.com" className="icon-link email">
              <FaEnvelope />
            </a>
          </div>
        </nav>

      </div>

      {menuOpen && <div className="overlay"></div>}
    </header>
  );
}

export default Header;
