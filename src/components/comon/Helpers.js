export const secondsToMM_SS = seconds => {
  let sec = seconds % 60;
  let min = Math.floor(seconds / 60);
  let secondsPart = String(sec).padStart(2, 0);
  let minutesPart = String(min).padStart(2, 0);
  return `${minutesPart}:${secondsPart}`;
};
