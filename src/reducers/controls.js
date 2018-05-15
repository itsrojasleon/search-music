import { TOGGLE_PLAY } from '../actions/controls';

export default function controls(state = false, action) {
  switch(action.type) {
    case TOGGLE_PLAY:
      return !state;
    default:
      return state;
  }
}