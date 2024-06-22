import { useEffect, useState } from 'react';

function DisplayCountdown() {

  const [countdown, setCountdown] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date('2024-11-20').getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date().getTime();
      const remaining = departureDate - today;

      if(remaining < 0) {
        clearInterval(timer);
        setCountdown("It's time to go !");
	return;
      }

      const seconds = Math.floor(remaining / 1000);

      const minutes = Math.floor(seconds / 60);

      const hours = Math.floor(minutes / 60);

      const days = Math.floor(hours / 24);

      const months = Math.floor(days / 30);


      days %= 30;

      hours %= 24;

      minutes %= 60;

      seconds %= 60;
   
      setCountdown(`${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
  }, []);

  return (
    <>
      <div>{countdown}</div> 
    </>
  );
}

export default DisplayCountdown;
