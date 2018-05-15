export const SONG_IN_PLAY = 'SONG_IN_PLAY';
export const CURRENT_SONG = 'CURRENT_SONG'

export const songInPlay = (songs) => ({
  type: SONG_IN_PLAY,
  songs,
});
export const currentSong = (id) => ({
  type: CURRENT_SONG,
  id,
})