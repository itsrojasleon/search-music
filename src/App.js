import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import ErrorBoundarie from './containers/error-boundarie';

import LoadingBar from 'react-redux-loading';

import Search from './containers/search';
import Card from './containers/card';
import SearchBar from './containers/search-bar';

class App extends Component {
  render() {
    const { songs } = this.props;
    return (
      <Router>
        <div className="parent">
          <LoadingBar />
          <SearchBar />
          <ErrorBoundarie>
            <Switch>
              <Route exact path="/search" component={Search} />
              <Route path="/search/results/:track" render={() => (
                songs ? (
                  <Card />
                ) : (
                  <Redirect to="/search" />
                )
              )} />
              <Route exact path="/" render={() => (
                <Redirect to="/search" />
              )} />
            </Switch>
          </ErrorBoundarie>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({ songs }) => ({
  songs,
});

export default connect(mapStateToProps)(App);
