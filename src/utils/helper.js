export const helperTime = (time) => {
  if (!time) return null;
  const newTime = time.toFixed(0);
  return `0.${newTime}`;
}