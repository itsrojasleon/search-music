import React, { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundarie from './containers/error-boundarie';

import LoadingBar from 'react-redux-loading';

import Home from './containers/home';
import Track from './containers/track';
import SearchBar from './containers/search-bar';

const App = () => (
  <Router>
    <Fragment>
      <LoadingBar />
      <SearchBar />
      <ErrorBoundarie>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/track" component={Track} />
        </Switch>
      </ErrorBoundarie>
    </Fragment>
  </Router>
);

export default App;
