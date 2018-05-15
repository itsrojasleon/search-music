import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';
import toggle from './toggle';
import selectSong from './selectSong';
import songInPlay from './songInPlay';

export default combineReducers({
  songs,
  toggle,
  selectSong,
  songInPlay,
  loadingBar: loadingBarReducer,
});