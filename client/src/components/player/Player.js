import React from 'react';
import DataSong from './DataSong';
import MusicControl from './MusicControl';
import MusicVolume from './MusicVolume';

import { PlayerContainer } from '../styled-components/player/player';

/* 
        Left                 Center          Right
  DataSong ===== MusicControl ===== MusicVolume
*/
function Player() {
  return (
    <PlayerContainer>
      <DataSong />
      <MusicControl />
      <MusicVolume />
    </PlayerContainer>
  );
}
export default Player;
