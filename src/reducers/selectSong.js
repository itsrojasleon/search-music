import { SELECTED_SONG } from '../actions/selectSong';

export default function selectedSong(state = {}, action) {
  switch(action.type) {
    case SELECTED_SONG:
      return action.song;
    default:
      return state;
  }
}