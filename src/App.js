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

import Home from './containers/home';
import Card from './containers/card';
import SearchBar from './containers/search-bar';
import Player from './containers/player';

class App extends Component {
  render() {
    const { songs, theme } = this.props;
    return (
      <Router>
        <div className={theme === false ? 'parent' : 'parent-dark'}>
          <SearchBar />
          <LoadingBar />
          <ErrorBoundarie>
            <Switch>
            <Route exact path="/search-music" component={Home} />
            <Route path="/search-music/results/:cardName" render={() => (
              songs  ? (
                <Card />
              ) : (
                <Redirect to="/" />
              )
              )} />
              <Redirect from="/results" to="/search-music" />
              <Redirect from="/" to="/search-music" />
              <Route path="*" render={() => (
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
const mapStateToProps = ({ songs, selectedSong, theme, controls }) => ({
  songs,
  selectedSong,
  theme,
});

export default connect(mapStateToProps)(App);
