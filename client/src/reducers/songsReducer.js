import {
  FETCH_SONGS,
  SELECT_SONG,
  LOADING_SONGS,
  LOADED_SONGS
} from '../actions/types';

const initialState = {
  fetchedSongs: [],
  selectedSong: {},
  loadingSong: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        fetchedSongs: action.payload.filter(song => song.preview_url !== null)
      };
    case LOADING_SONGS:
      return {
        ...state,
        loadingSong: true
      };
    case LOADED_SONGS:
      return {
        ...state,
        loadingSong: false
      };
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload
      };
    default:
      return state;
  }
}
