import './Contato.scss';
import { useState } from 'react';

function Contato() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch('https://formspree.io/f/mpwdvjlj', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        setEnviado(true);
        form.reset();
        setTimeout(() => setEnviado(false), 5000);
      }
    });
  };

  return (
    <section className="contato" id="contato">
      <h2>Fale Comigo</h2>
      <p>Preencha o formulário abaixo e entrarei em contato o quanto antes!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu email" required />
        <textarea name="mensagem" placeholder="Sua mensagem" rows="5" required />
        <button type="submit">Enviar Mensagem</button>

        {enviado && <p className="mensagem-sucesso">Obrigado! Sua mensagem foi enviada.</p>}
      </form>
    </section>
  );
}

export default Contato;
