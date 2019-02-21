import React from 'react';

import SearchBar from './SearchBar';
import Tracks from './tracks/Tracks';
import Player from './player/Player';

import { TrackContext } from '../contexts/TrackContext';

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
        <Tracks />
      </Layout>
      <Player />
    </>
  );
}
export default Dashboard;
