// export const helperTime = exactlyTime => {
//   const minutes = Math.floor(exactlyTime / 60000)
//   const seconds = (exactlyTime % 60000 / 1000).toFixed(0)
//   const time = `${minutes}:${seconds}`
//   return time
// }
export const helperTime = time => {
  let cero;
  cero = time <= 10 ? '0' : '';
  const seconds = Math.floor(time);
  const minutes = Math.floor(time / 1000);
  return `${minutes}.${cero}${seconds}`;
}