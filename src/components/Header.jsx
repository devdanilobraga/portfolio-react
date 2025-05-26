import './Header.scss';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

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

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => { scrollToSection(homeRef); setMenuOpen(false); }}>Início</button></li>
            <li><button onClick={() => { scrollToSection(sobreRef); setMenuOpen(false); }}>Sobre</button></li>
            <li><button onClick={() => { scrollToSection(projetosRef); setMenuOpen(false); }}>Projetos</button></li>
            <li><button onClick={() => { scrollToSection(habilidadesRef); setMenuOpen(false); }}>Habilidades</button></li>
            <li><button onClick={() => { scrollToSection(contatoRef); setMenuOpen(false); }}>Contato</button></li>
          </ul>
        </nav>
      </div>

      {menuOpen && <div className="overlay"></div>}
    </header>
  );
}

export default Header;
