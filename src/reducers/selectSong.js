import { SELECTED_SONG } from '../actions/selectSong';

export default function selectSong(state = [], action) {
  switch(action.type) {
    case SELECTED_SONG:
      return action.id;
    default:
      return state;
  }
}