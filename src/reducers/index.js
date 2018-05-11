import { loadingBarReducer } from 'react-redux-loading';
import { combineReducers } from 'redux';

import songs from './songs';

export default combineReducers({
  songs,
  loadingBar: loadingBarReducer,
});