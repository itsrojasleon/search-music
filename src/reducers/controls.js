import { SET_PLAY, SET_PAUSE, SET_VOLUME, SET_LAST_VOLUME, SET_DURATION, SET_TIME_UPDATE } from '../actions/controls';

const initialState = {
  paused: true,
  volume: 1,
  lastVolume: null,
  duration: 0,
  progress: 0,
};
export default function controls(state = initialState, action) {
  switch(action.type) {
    case SET_PLAY:
      return {
        ...state,
        paused: action.play,
      }
    case SET_PAUSE:
      return {
        ...state,
        paused: action.play,
      }
    case SET_VOLUME:
      return {
        ...state,
        volume: action.volume,
      }
    case SET_LAST_VOLUME:
      return {
        ...state,
        lastVolume: action.volume,
      }
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration,
      }
    case SET_TIME_UPDATE:
      return {
        ...state,
        progress: action.time,
      }
    default:
      return state;
  }
}