import { useEffect, useState } from 'react';
import CalculateRemainingTime from '../utils/CalculateRemainingTime'

function DisplayCountdown() {

  const [countdown, setCountdown] = useState(CalculateRemainingTime());

  useEffect(() => {
    if(countdown ==  "It's time to go !"){
      return;
    }
    const intervalId = setInterval(() => {
      setCountdown(CalculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>{countdown}</div>
    </>
  );
}

export default DisplayCountdown;
