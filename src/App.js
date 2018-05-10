import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/home';
import SearchBar from './containers/search-bar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
