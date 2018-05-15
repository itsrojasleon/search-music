import { SELECTED_SONG } from '../actions/selectSong';

export default function selectSong(state = null, action) {
  switch(action.type) {
    case SELECTED_SONG:
      return action.id;
    default:
      return state;
  }
}