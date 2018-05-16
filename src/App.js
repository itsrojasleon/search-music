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
            <Route exact path="/" component={Home} />
            <Route path="/recent" component={Recent} />
            <Route path="/results/:cardName" render={() => (
              songs  ? (
                <Card />
              ) : (
                <Redirect to="/" />
              )
              )} />
              <Redirect from="/results" to="/" />
              <Route path="*" render={() => (
                <h2>Error 404</h2>
              )} />
            </Switch>
          </ErrorBoundarie>
          {this.props.selectedSong.id && (
            <Player />
          )}
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
