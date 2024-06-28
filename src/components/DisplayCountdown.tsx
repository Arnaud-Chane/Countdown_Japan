import { useEffect, useState } from 'react';
import CalculateRemainingTime from '../utils/CalculateRemainingTime'

function DisplayCountdown() {
  const [countdown, setCountdown] = useState('');
  const [units, setUnits] = useState([]);
  const [numbs, setNumbs] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = CalculateRemainingTime();

      if (newCountdown !== "It's time to go !") {
        const splitTimer = newCountdown.split(' ');
        const newRows = splitTimer.reduce((result, key, index) => {
          return (index % 2 === 0 ? result.push([key]) : result[result.length - 1].push(key)) && result;
        }, []);
        const newUnits = newRows.map(row => row[1]);
        setUnits(newUnits);

        const newNumbers = newRows.map(row => row[0]);
        setNumbs(newNumbers);

      } else {
        setCountdown(CalculateRemainingTime())
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {countdown == "It's time to go !" ?
        <div>{countdown}</div> :
        <div className="flex gap-2">
          <div className="flex-col text-right">
            {numbs.map(numb => (
              <div className="numb">{numb}</div>
            ))}
          </div>

          <div className="flex-col">
            {units.map(unit => (
              <div className="unit">{unit}</div>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default DisplayCountdown;