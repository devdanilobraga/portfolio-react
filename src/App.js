import React, { useRef, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import OpeningScreen from './abertura/OpeningScreen';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import './App.scss';

function App() {
  const [showHome, setShowHome] = useState(false);

  const homeRef = useRef(null);
  const sobreRef = useRef(null);
  const habilidadesRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    
  return (
    <Router>
      {!showHome ? (
        <OpeningScreen onFinish={() => setShowHome(true)} />
      ) : (
        <>
          <Header scrollToSection={scrollToSection} homeRef={homeRef} sobreRef={sobreRef} habilidadesRef= {habilidadesRef} projetosRef={projetosRef} contatoRef={contatoRef}/>
          <main>
            <div ref={homeRef}><Home /></div>
            <div ref={sobreRef}><Sobre /></div>
            <div ref={habilidadesRef}><Habilidades /></div>
            <div ref={projetosRef}><Projetos /></div>
            <div ref={contatoRef}><Contato /></div>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
