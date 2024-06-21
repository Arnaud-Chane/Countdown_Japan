import { useEffect, useState } from 'react';

function DisplayCountdown() {

  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const departureDate = new Date('2024-11-20').getTime();
    const timer = setInterval(() => {
      const today = new Date().getTime();
      const remaining = departureDate - today;

      if(remaining < 0) {
        clearInterval(timer);
        setCountdown("It's time to go !");
	return;
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }, []);

  return (
    <>
      <div>{countdown}</div> 
    </>
  );
}

export default DisplayCountdown;
