import React from 'react';
import { connect } from 'react-redux';
import Error from './Error';
import SearchBar from './SearchBar';
import Track from './tracks/Track';
import Player from './player/Player';

import { Layout } from './styled-components/dashboard';

// Structure:
// 1) Header
// 2) SearchBar
// 3) Music
// 4) Player (Music Player)

function Dashboard({ error, songs }) {
  if (error) return <Error />;
  return (
    <>
      <Layout>
        <SearchBar />
        <Track />
      </Layout>
      <Player />
    </>
  );
}
const mapStateToProps = ({ songs }) => ({
  error: songs.error
});
export default connect(mapStateToProps)(Dashboard);
