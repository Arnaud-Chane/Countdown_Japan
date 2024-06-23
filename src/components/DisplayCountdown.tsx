import { useEffect, useState } from 'react';

function DisplayCountdown() {

  const [countdown, setCountdown] = useState('');
  // const [departureDate, setDepartureDate] = useState(new Date('2024-11-20').getTime());

  useEffect(() => {
    const departureDate = new Date('2024-11-20').getTime();
    const timer = setInterval(() => {
      const today = new Date().getTime();
      const remaining = departureDate - today;

      if (remaining < 0) {
        clearInterval(timer);
        setCountdown("It's time to go !");
        return;
      }
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const months = convertDaysToYearsMonthsDays(days);
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setCountdown(`${months} ${hours}h ${minutes}min ${seconds}s`);
    }, 1000);
  }, []);

  function convertDaysToYearsMonthsDays(days: number) {
    const avgDaysInYear = 365;
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Calculate years
    const years = Math.floor(days / avgDaysInYear);
    
    // Calculate remaining days
    let remainingDays = days - (years * avgDaysInYear);
    
    // Calculate leap years
    let leapYears = 0;
    for (let i = 0; i <= years; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
            leapYears++;
        }
    }
    
    // Distribute remaining days across months
    let months = 0;
    let currentMonth = 0;
    while (remainingDays > monthLengths[currentMonth]) {
        remainingDays -= monthLengths[currentMonth];
        currentMonth++;
        months++;
        
        if (currentMonth === 1 && leapYears > 0) {
            remainingDays--;
            leapYears--;
        }
    }
    
    return `${years}y ${months}m ${remainingDays}d`;
  }

  return (
    <>
      <div>{countdown}</div>
    </>
  );
}

export default DisplayCountdown;
