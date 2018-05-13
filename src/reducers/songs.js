import { SEARCH_SONG, EMPTY_SEARCH, MOUSE_ENTER, MOUSE_LEAVE } from '../actions/songs';

export default function songs(state = [], action) {
  switch(action.type) {
    case SEARCH_SONG:
      return action.data.tracks.items;
    case EMPTY_SEARCH:
      return null;
    case MOUSE_ENTER:
      return state.filter((song) => song.id !== action.id);
    case MOUSE_LEAVE:
      return state.filter((song) => song.id !== action.id);
    default:
      return state;
  }
}