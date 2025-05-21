import React, { useEffect, useState } from 'react';
import './OpeningScreen.css';

const OpeningScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

useEffect(() => {
  
  const timer = setTimeout(() => {
    setVisible(false);
    if (onFinish) onFinish();
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
}, [onFinish]);


  if (!visible) return null;

  return (
    <div className="opening-container">
      <h1 className="opening-title">-Danilo Braga-</h1>
      <p className="opening-subtitle">Desenvolvedor Web</p>
    </div>
  );
};

export default OpeningScreen;
