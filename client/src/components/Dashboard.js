import React from 'react';
import SearchBar from './SearchBar';
import Track from './tracks/Track';
import Player from './player/Player';

import { Layout } from './styled-components/dashboard';

// Structure:
// 1) Header
// 2) SearchBar
// 3) Music
// 4) Player (Music Player)

function Dashboard() {
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
export default Dashboard;
