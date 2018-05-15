export const SELECTED_SONG = 'SELECTED_SONG';

export const selectSong = (song) => ({
  type: SELECTED_SONG,
  song,
});