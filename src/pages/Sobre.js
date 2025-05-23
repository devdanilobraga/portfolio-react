// src/pages/Sobre.js
import './Sobre.scss';

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container">
        <h1>Sobre Mim</h1>
        <div className="content">
          <img src="./assets/danilo-desenho.png" alt="Minha Foto" className="perfil" />
          <div className="texto">
            <p>
              Olá! Sou desenvolvedor <strong>Full Stack</strong> com foco em <strong>React</strong>, <strong>Node.js</strong> e <strong>SASS</strong>. Tenho paixão por criar interfaces modernas, responsivas e funcionais, sempre buscando a melhor experiência para o usuário.
            </p>
            <p>
              Tenho experiência com projetos web, WMS, bots para WhatsApp e sistemas logísticos, além de estar sempre aprendendo novas tecnologias.
            </p>
            <p>
              Estou aberto a oportunidades, colaborações ou apenas um bom papo sobre tecnologia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
