import { TOGGLE_ICON } from '../actions/toggle';

export default function toggle(state = false, action) {
  switch(action.type) {
    case TOGGLE_ICON:
      return !state;
    default:
      return state;
  }
}