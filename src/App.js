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
import Recent from './containers/recent';
import Player from './containers/player';

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
              <Route path="/search/results/:cardName" render={() => (
                songs  ? (
                  <Card />
                ) : (
                  <Redirect from="/search/results/:cardName" to="/search/recent" />
                )
              )} />
              <Route path="/search/recent" component={Recent} />
              <Route exact path="/" render={() => (
                <Redirect to="/search" />
              )} />
              <Route path="/*" render={() => (
                <h2>Error 404</h2>
              )} />
            </Switch>
          </ErrorBoundarie>
          <Player />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = ({ songs, selectedSong }) => ({
  songs,
  selectedSong,
});

export default connect(mapStateToProps)(App);
