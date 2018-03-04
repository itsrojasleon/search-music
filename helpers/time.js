export const helperTime = exactlyTime => {
  const minutes = Math.floor(exactlyTime / 60000)
  const seconds = (exactlyTime % 60000 / 1000).toFixed(0)
  const time = `${minutes}:${seconds}`
  return time
}
