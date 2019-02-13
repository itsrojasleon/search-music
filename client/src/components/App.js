import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import Dashboard from './Dashboard';

import { fetchUser } from '../actions';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div className="ui container-fluid">
      <BrowserRouter>
        <Switch>
          <Header />
          <SearchBar />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
