const oneMinute = (1000 * 60);
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const avgDaysInYear = 365;
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function CalculateRemainingTime(): string {

  //
  //  If you want to change the departure date :
  //
  const departureDate = new Date('2024-11-20').getTime();
  //
  //
  //

  let finalString: string[] = [];
  const remaining = departureDate - Date.now();

  if (remaining < 0) {
    return "It's time to go !";
  }

  const days = Math.floor(remaining / oneDay);
  const years = Math.floor(days / avgDaysInYear);
  let leapYears = Math.floor(years / 4) - Math.floor(years / 100) + Math.floor(years / 400);

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

  years && finalString.push(`${years} Year`);
  months && finalString.push(`${months} Month`);
  remainingDays && finalString.push(`${remainingDays} Day`);
  hours && finalString.push(`${hours} Hour`);
  minutes && finalString.push(`${minutes} Minute`);
  seconds && finalString.push(`${seconds} Second`);

  return finalString.join(" ");
}

export default CalculateRemainingTime;