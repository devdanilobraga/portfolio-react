import './Header.scss';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Início',      ref: 'homeRef' },
  { label: 'Sobre',       ref: 'sobreRef' },
  { label: 'Habilidades', ref: 'habilidadesRef' },
  { label: 'Projetos',    ref: 'projetosRef' },
  { label: 'Contato',     ref: 'contatoRef' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/danilo-braga-785b70136/', icon: <FaLinkedin />, label: 'LinkedIn',  cls: 'linkedin' },
  { href: 'https://github.com/devdanilobraga',                   icon: <FaGithub />,   label: 'GitHub',    cls: 'github' },
  { href: 'https://wa.me/5521971536909',                         icon: <FaWhatsapp />, label: 'WhatsApp',  cls: 'whatsapp' },
  { href: 'mailto:danilobragam@gmail.com',                       icon: <FaEnvelope />, label: 'E-mail',    cls: 'email' },
];

function Header({ scrollToSection, homeRef, sobreRef, habilidadesRef, projetosRef, contatoRef }) {
  const refs = { homeRef, sobreRef, habilidadesRef, projetosRef, contatoRef };

  const [menuOpen, setMenuOpen]   = useState(false);
  const [darkMode, setDarkMode]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handle = (e) => {
      if (!e.target.closest('.header')) setMenuOpen(false);
    };
    document.addEventListener('click', handle);
    return () => document.removeEventListener('click', handle);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const refValues = NAV_ITEMS.map((item) => refs[item.ref]?.current).filter(Boolean);
    if (!refValues.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refValues.indexOf(entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    refValues.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [homeRef, sobreRef, habilidadesRef, projetosRef, contatoRef]);

  const handleNavClick = (refKey) => {
    scrollToSection(refs[refKey]);
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => scrollToSection(homeRef)}
          aria-label="Ir para o início"
        >
          <span className="logo-initials">DB</span>
          <span className="logo-dot" aria-hidden="true" />
        </button>

        {/* Nav (drawer no mobile, inline no desktop) */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          <ul>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.ref}>
                <button
                  className={activeIdx === i ? 'active' : ''}
                  onClick={() => handleNavClick(item.ref)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Ícones sociais — só aparece dentro do drawer mobile */}
          <div className="social-icons mobile-only" aria-label="Redes sociais">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.cls}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon-link ${s.cls}`}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </nav>

        {/* Ações do lado direito */}
        <div className="header-actions">

          {/* Ícones sociais — só aparece no desktop */}
          <div className="social-icons desktop-only" aria-label="Redes sociais">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.cls}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon-link ${s.cls}`}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;