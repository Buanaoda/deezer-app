export const convertSecondsToMinutesFormat = (seconds) => {
  const totalSeconds = parseInt(seconds);
  const remainingSeconds = totalSeconds % 60;
  const minutes = (totalSeconds - remainingSeconds) / 60;
  const stringForMinutesWithSeconds = `${minutes > 9 ? '' : '0'}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  const stringForMinutesOnlyAndZeroSeconds = `${minutes > 9 ? '' : '0'}${minutes}:00`;
  const stringForOnlySeconds = `00:${remainingSeconds}`;
  if (remainingSeconds > 0) return stringForMinutesWithSeconds;
  if (remainingSeconds === 0) return stringForMinutesOnlyAndZeroSeconds;
  if (remainingSeconds < 0) return stringForOnlySeconds;
};