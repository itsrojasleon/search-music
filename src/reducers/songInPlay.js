import { SONG_IN_PLAY, CURRENT_SONG } from '../actions/songInPlay';

export default function songInPlay(state = [], action) {
  switch (action.type) {
    case SONG_IN_PLAY:
      return action.songs;
    case CURRENT_SONG:
      return state.filter((song) => song.id === action.id);
    default:
      return state;
  }
}