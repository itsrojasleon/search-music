export const SELECTED_SONG = 'SELECTED_SONG';

export const selectedSong = (id) => ({
  type: SELECTED_SONG,
  id,
});