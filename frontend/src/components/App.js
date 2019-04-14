import React, { Fragment, useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchUser } from '../actions';

const Header = lazy(() => import('./header/Header'));
const Dashboard = lazy(() => import('./Dashboard'));

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <Fragment>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
