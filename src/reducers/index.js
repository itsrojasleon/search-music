import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';
import toggle from './toggle';
import selectedSong from './selectSong';
import controls from './controls';
import theme from './theme';

export default combineReducers({
  songs,
  toggle,
  selectedSong,
  controls,
  theme,
  loadingBar: loadingBarReducer,
});