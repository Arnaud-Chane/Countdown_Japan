const oneMinute = 60 * 1000;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;
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

  const timeUnits = [
    { unit: 'Year', value: Math.floor(remaining / (oneDay * avgDaysInYear)) },
    { unit: 'Month', value: 0 },
    { unit: 'Day', value: Math.floor((remaining % (oneDay * avgDaysInYear)) / oneDay) },
    { unit: 'Hour', value: Math.floor((remaining % oneDay) / oneHour) },
    { unit: 'Minute', value: Math.floor((remaining % oneHour) / oneMinute) },
    { unit: 'Second', value: Math.floor((remaining % oneMinute) / 1000) },
  ];

  let remainingDays = timeUnits[2].value;
  let currentMonth = 0;
  while (remainingDays > monthLengths[currentMonth]) {
    remainingDays -= monthLengths[currentMonth];
    currentMonth++;
    timeUnits[1].value++;
  }
  timeUnits[2].value = remainingDays;

  timeUnits.forEach(({ unit, value }) => {
    if (value > 0) {
      finalString.push(`${value} ${unit}${value > 1 ? 's' : ''}`);
    }
  });

  return finalString.join(" ");
}

export default CalculateRemainingTime;