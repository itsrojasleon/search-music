import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import Dashboard from './Dashboard';

import { fetchUser } from '../actions';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div>
            <Route path="/" exact component={Dashboard} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
