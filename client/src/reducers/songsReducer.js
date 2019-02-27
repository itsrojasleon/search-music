import { FETCH_SONGS, SELECT_SONG } from '../actions/types';

const initialState = {
  fetchedSongs: [],
  selectedSong: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        fetchedSongs: action.payload.filter(
          song => song.preview_url !== null
        )
      }
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload
      }
    default:
      return state;
  }
}
