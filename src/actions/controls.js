export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const TOGGLE_START = 'TOGGLE_START';

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
});
export const toggleStart = () => ({
  type: TOGGLE_START,
  play: false,
});
