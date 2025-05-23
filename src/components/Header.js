import './Header.scss';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Header() {
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
    return () => document.removeEventListener('click', handleOutsideClick);
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
            <li><NavLink to="/home" onClick={() => setMenuOpen(false)}>Início</NavLink></li>
            <li><NavLink to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</NavLink></li>
            <li><NavLink to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</NavLink></li>
            <li><NavLink to="/habilidades" onClick={() => setMenuOpen(false)}>Habilidades</NavLink></li>
            <li><NavLink to="/contato" onClick={() => setMenuOpen(false)}>Contato</NavLink></li>
          </ul>
        </nav>
      </div>
      {menuOpen && <div className="overlay"></div>}
    </header>
  );
}

export default Header;
