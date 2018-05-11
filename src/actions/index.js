import { showLoading, hideLoading } from 'react-redux-loading'

export const SEARCH_SONG = 'SEARCH_SONG';
// export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export function fetchPosts(song) {
  return async (dispatch) => {
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
