import { showLoading, hideLoading } from 'react-redux-loading'

export const SEARCH_SONG = 'SEARCH_SONG';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';

export function fetchSongs(song) {
  return async (dispatch) => {
    if(song === '') return null;
    dispatch(showLoading());
    const response = await fetch(`https://spotify-demo-api.now.sh/search?q=${song}&type=track`);
    const data = await response.json();
    dispatch({
      type: SEARCH_SONG,
      data,
    });
    dispatch(hideLoading());
  }
}
export const emptySearch = () => ({
  type: EMPTY_SEARCH,
});
