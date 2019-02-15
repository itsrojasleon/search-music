import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import SideBar from './SideBar';

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
          <SideBar />
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
