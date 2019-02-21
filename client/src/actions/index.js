import axios from 'axios';

import { FETCH_USER, FETCH_SONGS } from './types';

export const fetchUser = () => async dispatch => {
  const { data } = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: data
  });
};
export const fetchSongs = song => async dispatch => {
  if (!song) return;
  try {
    const response = await fetch(
      `https://spotify-demo-api.now.sh/search?q=${song}&type=track`
    );
    const data = await response.json();
    dispatch({
      type: FETCH_SONGS,
      payload: data.tracks.items
    });
  } catch (err) {
    throw new Error('What is up!');
  }
};
