import React, { useState } from 'react';
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

  return (
    <Router>
      {!showHome ? (
        <OpeningScreen onFinish={() => setShowHome(true)} />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Contato />
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
