import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(thunk, logger),
);

store.subscribe(throttle(() => {
  saveState({
    songs: store.getState().songs,
    theme: store.getState().theme,
    selectedSong: store.getState().selectedSong,
  });
}, 1000));

export default store;