import { SEARCH_SONG, REJECTED } from '../actions/songs';

export default function songs(state = [], action) {
  switch(action.type) {
    case SEARCH_SONG:
      return action.data.tracks.items;
    default:
      return state;
  }
}