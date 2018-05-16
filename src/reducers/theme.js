import { TOGGLE_THEME } from '../actions/theme';

export default function theme(state = false, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return !state;
    default:
      return state;
  }
}