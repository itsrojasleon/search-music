export const SET_PLAY = 'SET_PLAY';
export const SET_PAUSE = 'SET_PAUSE';
export const TOGGLE_START = 'TOGGLE_START';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_LAST_VOLUME = 'SET_LAST_VOLUME';
export const SET_DURATION = 'SET_DURATION';
export const SET_TIME_UPDATE = 'SET_TIME_UPDATE';

export const setPlay = () => ({
  type: SET_PLAY,
  play: false,
});
export const setPause = () => ({
  type: SET_PAUSE,
  play: true,
});
export const setVolume = (volume) => ({
  type: SET_VOLUME,
  volume,
});
export const setLastVolume = (volume) => ({
  type: SET_LAST_VOLUME,
  volume,
});
export const setDuration = (duration) => ({
  type: SET_DURATION,
  duration,
});
export const setTimeUpdate = (time) => ({
  type: SET_TIME_UPDATE,
  time,
});
