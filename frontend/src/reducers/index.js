import { combineReducers } from 'redux';
import authReducer from './authReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  auth: authReducer,
  songs: songsReducer
});
