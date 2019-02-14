import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';

import { fetchUser } from '../actions';

import { Layout } from './styled-components/app';

function App(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Layout>
            <Route path="/" exact component={Dashboard} />
          </Layout>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}
export default connect(
  null,
  { fetchUser }
)(App);
