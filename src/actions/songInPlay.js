export const CURRENT_SONG = 'CURRENT_SONG'

export const currentSong = (song) => ({
  type: CURRENT_SONG,
  song,
})