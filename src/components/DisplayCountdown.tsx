import { useEffect, useState } from 'react';
import CalculateRemainingTime from '../utils/CalculateRemainingTime'

const DisplayCountdown: React.FC = () => {
  const [countdown, setCountdown] = useState<string>('');
  const [units, setUnits] = useState<string[]>([]);
  const [numbs, setNumbs] = useState<string[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = CalculateRemainingTime();

      if (remainingTime !== "It's time to go !") {
        const splitTimer = remainingTime.split(' ');
        const newRows = splitTimer.reduce((result: string[][], key, index) => {
          if (index % 2 === 0) {
            result.push([key]);
          } else {
            result[result.length - 1].push(key);
          }
          return result;
        }, []);
        const newUnits = newRows.map(row => row[1]);
        setUnits(newUnits);

        const newNumbers = newRows.map(row => row[0]);
        setNumbs(newNumbers);

      } else {
        setCountdown(remainingTime)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {countdown === "It's time to go !" ?
        <div className="italic font-thin">
          {countdown}
        </div> :

        <div className="flex gap-2">
          <div className="flex-col text-right">
            {numbs.map((numb, index) => (
              <div key={index} className="numb">{numb}</div>
            ))}
          </div>

          <div className="flex-col">
            {units.map((unit, index) => (
              <div key={index} className="unit">{unit}</div>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default DisplayCountdown;