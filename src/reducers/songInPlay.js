import { CURRENT_SONG } from '../actions/songInPlay';

export default function songInPlay(state = [], action) {
  switch (action.type) {
    case CURRENT_SONG:
      return action.song;
    default:
      return state;
  }
}