import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(thunk),
);

store.subscribe(throttle(() => {
  saveState({
    songs: store.getState().songs,
  });
}, 1000));

console.log(store.getState());

export default store;