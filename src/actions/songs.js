import { showLoading, hideLoading } from 'react-redux-loading'

export const SEARCH_SONG = 'SEARCH_SONG';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';
export const MOUSE_ENTER = 'MOUSE_ENTER';
export const MOUSE_LEAVE = 'MOUSE_LEAVE';

export function fetchSongs(song, callback) {
  return async (dispatch) => {
    if(song === '') return null;
    dispatch(showLoading());
    const response = await fetch(`https://spotify-demo-api.now.sh/search?q=${song}&type=track`);
    const data = await response.json();
    callback();
    dispatch({
      type: SEARCH_SONG,
      data,
    });
    dispatch(hideLoading());
  }
}
export function emptySearch() {
  return {
    type: EMPTY_SEARCH,
  }
}

export const onMouseEnter = (id) => ({
  type: MOUSE_ENTER,
  id,
});
export const onMouseLeave = (id) => ({
  type: MOUSE_LEAVE,
  id,
});
