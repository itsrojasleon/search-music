import React, { Fragment, useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchUser } from '../actions';
import Header from './header/Header';
const Dashboard = lazy(() => import('./Dashboard'));

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
