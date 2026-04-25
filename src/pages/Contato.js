import './Contato.scss';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Loader, Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

// ─── Canais alternativos ──────────────────────────────────────────────────────
const CANAIS = [
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    sub: '(21) 97153-6909',
    href: 'https://wa.me/5521971536909',
    cls: 'whatsapp',
  },
  {
    icon: <Mail size={20} />,
    label: 'E-mail',
    sub: 'danilobragam@gmail.com',
    href: 'mailto:danilobragam@gmail.com',
    cls: 'email',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    sub: 'danilo-braga',
    href: 'https://www.linkedin.com/in/danilo-braga-785b70136/',
    cls: 'linkedin',
  },
];

// ─── Componente ───────────────────────────────────────────────────────────────
function Contato() {
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [visible, setVisible] = useState(false);
  const sectionRef            = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/mpwdvjlj', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contato" id="contato" ref={sectionRef}>
      <div className="contato-container">

        {/* Cabeçalho */}
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <h2 className="section-title">Fale Comigo</h2>
          <p className="section-sub">
            Tem um projeto em mente ou quer trocar uma ideia? Me chame!
          </p>
        </div>

        <div className="contato-grid">

          {/* Canais */}
          <aside className={`canais ${visible ? 'visible' : ''}`}>
            <p className="canais-titulo">Outras formas de contato</p>
            {CANAIS.map((c) => (
              <a
                key={c.cls}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`canal-item ${c.cls}`}
              >
                <span className="canal-icon">{c.icon}</span>
                <span className="canal-info">
                  <strong>{c.label}</strong>
                  <span>{c.sub}</span>
                </span>
              </a>
            ))}
          </aside>

          {/* Formulário */}
          <div className={`form-wrap ${visible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} noValidate>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte um pouco sobre seu projeto ou ideia..."
                  rows="5"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <button
                type="submit"
                className={`btn-enviar ${status}`}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'idle' && (
                  <><Send size={16} /> Enviar mensagem</>
                )}
                {status === 'loading' && (
                  <><Loader size={16} className="spin" /> Enviando…</>
                )}
                {status === 'success' && (
                  <><CheckCircle size={16} /> Mensagem enviada!</>
                )}
                {status === 'error' && (
                  <><Send size={16} /> Tentar novamente</>
                )}
              </button>

              {status === 'success' && (
                <p className="feedback success">
                  Obrigado! Entrarei em contato em breve.
                </p>
              )}
              {status === 'error' && (
                <p className="feedback error">
                  Algo deu errado. Tente novamente ou use outro canal.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contato;