import { TOGGLE_PLAY, TOGGLE_START, SET_VOLUME, SET_LAST_VOLUME } from '../actions/controls';

const initialState = {
  paused: true,
  volume: 1,
  lastVolume: null,
  duration: 0,
};
export default function controls(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        paused: !state.paused,
      }
    case TOGGLE_START:
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
    default:
      return state;
  }
}