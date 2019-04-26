import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Layout } from './styled-components/dashboard';
import SearchBar from './SearchBar';
import Track from './tracks/Track';
import Error from './Error';

function Dashboard({ error }) {
  if (error) return <Error />;
  return (
    <Fragment>
      <Layout>
        <SearchBar />
        <Track />
      </Layout>
    </Fragment>
  );
}
const mapStateToProps = ({ songs }) => ({
  error: songs.error
});
export default connect(mapStateToProps)(Dashboard);
