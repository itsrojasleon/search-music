import { TOGGLE_PLAY, TOGGLE_START } from '../actions/controls';

const initialState = {
  paused: false,
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
    default:
      return state;
  }
}