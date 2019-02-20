import React from 'react';
import { Layout } from './styled-components/dashboard';
import SearchBar from './SearchBar';
import Player from './player/Player';

function Dashboard() {
  return (
    <>
      <Layout>
        <SearchBar />
      </Layout>
      <Player />
    </>
  );
}
export default Dashboard;
