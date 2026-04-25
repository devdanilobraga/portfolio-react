import './Footer.scss';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/danilo-braga-785b70136/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    cls: 'linkedin',
  },
  {
    href: 'https://github.com/devdanilobraga',
    icon: <FaGithub />,
    label: 'GitHub',
    cls: 'github',
  },
  {
    href: 'https://wa.me/5521971536909',
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    cls: 'whatsapp',
  },
  {
    href: 'mailto:danilobragam@gmail.com',
    icon: <FaEnvelope />,
    label: 'E-mail',
    cls: 'email',
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Ícones sociais */}
        <div className="footer-social" aria-label="Redes sociais">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.cls}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`icon-link ${s.cls}`}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()}{' '}
          <a
            href="https://www.linkedin.com/in/danilo-braga-785b70136/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danilo Braga
          </a>
          . Todos os direitos reservados.
        </p>

        {/* Botão voltar ao topo */}
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}

export default Footer;