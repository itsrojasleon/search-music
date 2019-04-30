import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';
import './index.css';
import throttle from 'lodash.throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState({
      songs: store.getState().songs
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
