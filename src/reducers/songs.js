import { SEARCH_SONG } from '../actions';

export default function songs(state = [], action) {
  switch(action.type) {
    case SEARCH_SONG:
      return state.concat(action.data.tracks.items);
    default:
      return state;
  }
}