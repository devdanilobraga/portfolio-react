import './Header.scss';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.header')) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Danilo Braga</h1>

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
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Início</a></li>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        {menuOpen && <div className="overlay"></div>}
      </div>
    </header>
  );
}

export default Header;
