export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const TOGGLE_START = 'TOGGLE_START';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_LAST_VOLUME = 'SET_LAST_VOLUME';

export const togglePlay = () => ({
  type: TOGGLE_PLAY,
});
export const toggleStart = () => ({
  type: TOGGLE_START,
  play: false,
});
export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});
export const setLastVolume = (volume) => ({
  type: SET_LAST_VOLUME,
  volume,
});
