import { TOGGLE_VIEW } from '../actions/toggle';

export default function toggle(state = false, action) {
  switch(action.type) {
    case TOGGLE_VIEW:
      return !state;
    default:
      return state;
  }
}