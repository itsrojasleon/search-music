import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';
import toggle from './toggle';

export default combineReducers({
  songs,
  toggle,
  loadingBar: loadingBarReducer,
});