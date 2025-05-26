import React, { useEffect, useState } from 'react';
import styles from './OpeningScreen.module.css';

const OpeningScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className={styles.openingContainer}>
      <h1 className={styles.openingTitle}>-Danilo Braga-</h1>
      <p className={styles.openingSubtitle}>Desenvolvedor Web</p>
    </div>
  );
};

export default OpeningScreen;
