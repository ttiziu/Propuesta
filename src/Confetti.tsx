// Simple confetti effect for React (no dependencies)
import { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const colors = ['#ffb3c6', '#d16ba5', '#fff0f6', '#f9c6d1', '#f7a8b8'];
    const numConfetti = 80;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100vw';
    confettiContainer.style.height = '100vh';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < numConfetti; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'absolute';
      conf.style.width = '12px';
      conf.style.height = '12px';
      conf.style.borderRadius = '50%';
      conf.style.background = colors[Math.floor(Math.random() * colors.length)];
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-20px';
      conf.style.opacity = '0.85';
      conf.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
      confettiContainer.appendChild(conf);

      const fall = conf.animate([
        { transform: conf.style.transform, top: '-20px' },
        { transform: conf.style.transform + ' rotate(360deg)', top: 100 + Math.random() * 20 + 'vh' }
      ], {
        duration: 2000 + Math.random() * 2000,
        easing: 'ease-in',
        fill: 'forwards',
      });
      fall.onfinish = () => conf.remove();
    }
    return () => {
      confettiContainer.remove();
    };
  }, []);
  return null;
};

export default Confetti;
