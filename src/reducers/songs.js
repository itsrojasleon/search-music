import { SEARCH_SONG, EMPTY_SEARCH } from '../actions/songs';

export default function songs(state = [], action) {
  switch(action.type) {
    case SEARCH_SONG:
      return action.data.tracks.items;
    case EMPTY_SEARCH:
      return null;
    default:
      return state;
  }
}