import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';
import MusicVolume from './MusicVolume';

import { PlayerContainer } from '../styled-components/player/player';

/* 
        Left                 Center          Right
  DataSong ===== MusicControl ===== MusicVolume
*/
function Player(props) {
  return (
    <PlayerContainer>
      <DataSong />
      {props.selectedSong.name}
      <MusicControl />
      <MusicVolume />
    </PlayerContainer>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
})
export default connect(mapStateToProps)(Player);
