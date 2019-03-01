import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';
import MusicVolume from './MusicVolume';

import { PlayerContainer } from '../styled-components/player/player';

//DataSong ===== MusicControl ===== MusicVolume

function Player({ selectedSong }) {
  const { name } = selectedSong;
  return (
    <PlayerContainer>
      <DataSong name={name} />
      <MusicControl />
      <MusicVolume />
    </PlayerContainer>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps)(Player);
