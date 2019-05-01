import React, { Suspense, lazy, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchUser } from '../actions';
import Header from './header/Header';
import Player from './player/Player';

const Dashboard = lazy(() => import('./Dashboard'));
const Favorites = lazy(() => import('./favorites/Favorites'));
// import Dashboard from './Dashboard';
// import Favorites from './favorites/Favorites';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, [props]);
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Suspense>
        <Player />
      </Fragment>
    </BrowserRouter>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
