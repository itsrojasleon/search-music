import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';
import toggle from './toggle';
import selectSong from './selectSong';

export default combineReducers({
  songs,
  toggle,
  selectSong,
  loadingBar: loadingBarReducer,
});