export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  let emoji;

  if (cups > 5) {
    emoji = '🍺🍟';
  } else if (cups > 2) {
    emoji = '🥪☕';
  } else {
    emoji = '☕';
  }

  const minuteString = minutes === 1 ? 'min' : 'mins';

  return `${emoji} ${minutes} ${minuteString} to read (suggested)`;
}