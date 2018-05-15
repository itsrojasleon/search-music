export const SELECTED_SONG = 'SELECTED_SONG';

export const selectedSong = (song) => ({
  type: SELECTED_SONG,
  song,
});