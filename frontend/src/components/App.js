import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchUser } from '../actions';
import Header from './header/Header';
import Dashboard from './Dashboard';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
