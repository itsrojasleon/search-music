import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundarie from './containers/error-boundarie';

import LoadingBar from 'react-redux-loading';

import Home from './containers/home';
import SearchBar from './containers/search-bar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <SearchBar />
          <ErrorBoundarie>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </ErrorBoundarie>
        </Fragment>
      </Router>
    );
  }
}

export default App;
