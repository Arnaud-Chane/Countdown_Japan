import { useState, useEffect } from 'react';

function DisplayCountdown() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-11-20').getTime();
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timerId);
        setCountdown('Countdown ended');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timerId); // cleanup on component unmount
  }, []);

  return (
    <div>
      <div style={{ fontSize: '100px' }}>
        <span>{countdown}</span>
      </div>
    </div>
  );
}

export default DisplayCountdown;