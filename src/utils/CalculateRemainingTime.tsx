function CalculateRemainingTime(): string {

  //
  //  If you want to change the departure date :
  //
  const departureDate = new Date('2024-11-20').getTime();
  //
  //
  //

  const oneMinute = (1000 * 60);
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const avgDaysInYear = 365;
  const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let finalString: string[] = [];

  const today = new Date().getTime();
  const remaining = departureDate - today;

  if (remaining < 0) {
    return "It's time to go !";
  }

  const days = Math.floor(remaining / oneDay);

  const years = Math.floor(days / avgDaysInYear);
  let leapYears = 0;
  for (let i = 0; i <= years; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears++;
    }
  }

  let remainingDays = days - (years * avgDaysInYear);

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

  const hours = Math.floor((remaining % oneDay) / oneHour);
  const minutes = Math.floor((remaining % oneHour) / oneMinute);
  const seconds = Math.floor((remaining % oneMinute) / 1000);

  years && finalString.push(`${years}y`);
  months && finalString.push(`${months}m`);
  remainingDays && finalString.push(`${remainingDays}d`);
  hours && finalString.push(`${hours}h`);
  minutes && finalString.push(`${minutes}min`);
  seconds && finalString.push(`${seconds}s`);

  return finalString.join(" ");
}

export default CalculateRemainingTime;