import React, { Fragment } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

import ErrorBoundarie from './containers/error-boundarie';

import LoadingBar from 'react-redux-loading';

import Search from './containers/search';
import Track from './containers/track';
import SearchBar from './containers/search-bar';

const App = () => (
  <Router>
    <Fragment>
      <LoadingBar />
      <SearchBar />
      <ErrorBoundarie>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/search" />
          )} />
          <Route path="/search" component={Search} />
          <Route path="/search/results/:track" component={Track} />
        </Switch>
      </ErrorBoundarie>
    </Fragment>
  </Router>
);

export default App;
