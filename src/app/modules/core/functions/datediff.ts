import { TimeComponents } from '../interfaces/time-components.interface';

export function calcDateDiff(endDay: Date = new Date(2021, 12, 1)): TimeComponents {
  const dDay = endDay.valueOf();

  const milliSecondsInASecond = 1000;
  const hoursInADay = 24;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  const timeDifference = dDay - Date.now();

  const daysToDday = Math.floor(
    timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
  );

  const hoursToDday = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) % hoursInADay
  );

  const minutesToDday = Math.floor((timeDifference / (milliSecondsInASecond * minutesInAnHour)) % secondsInAMinute);

  const secondsToDday = Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

  if (endDay < new Date()) {
    return { secondsToDday: 0, minutesToDday: 0, hoursToDday: 0, daysToDday: 0 };
  }

  return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
}
