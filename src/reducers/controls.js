import { TOGGLE_PLAY, TOGGLE_START } from '../actions/controls';

export default function controls(state = false, action) {
  switch(action.type) {
    case TOGGLE_PLAY:
      return !state;
    case TOGGLE_START:
      return action.play;
    default:
      return state;
  }
}