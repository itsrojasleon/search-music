import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';
import toggle from './toggle';
import selectedSong from './selectSong';

export default combineReducers({
  songs,
  toggle,
  selectedSong,
  loadingBar: loadingBarReducer,
});