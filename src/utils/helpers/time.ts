export const americanTo24 = (time: string) => {
  const dayNight = time.split(' ');
  const [hours, minutes, seconds] = dayNight[0].split(':');
  let hours24 = parseInt(hours);
  if (dayNight[1] === 'PM') {
    hours24 += 12;
  } else if (hours24 === 12) {
    hours24 = 0;
  }
  let result = new Date().setUTCHours(hours24);
  result = new Date(result).setMinutes(parseInt(minutes));
  result = new Date(result).setSeconds(parseInt(seconds));
  return new Date(result).toLocaleTimeString();
};
