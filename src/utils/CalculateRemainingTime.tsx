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

  if (years) {
    if (years > 1) {
      finalString.push(`${years} Years`);
    } else if (years == 1) {
      finalString.push(`${years} Year`)
    }
  }

  if (months) {
    if (months > 1) {
      finalString.push(`${months} Months`);
    } else if (months == 1) {
      finalString.push(`${months} Month`)
    }
  }

  if (remainingDays) {
    if (remainingDays > 1) {
      finalString.push(`${remainingDays} Days`);
    } else if (remainingDays == 1) {
      finalString.push(`${remainingDays} Day`)
    }
  }

  if (hours) {
    if (hours > 1) {
      finalString.push(`${hours} Hours`);
    } else if (hours == 1) {
      finalString.push(`${hours} Hour`)
    }
  }

  if (minutes) {
    if (minutes > 1) {
      finalString.push(`${minutes} Minutes`);
    } else if (minutes == 1) {
      finalString.push(`${minutes} Minute`)
    }
  }

  if (seconds) {
    if (seconds > 1) {
      finalString.push(`${seconds} Seconds`);
    } else if (seconds == 1) {
      finalString.push(`${seconds} Second`)
    }
  }

  return finalString.join(" ");
}

export default CalculateRemainingTime;