import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';
import MusicVolume from './MusicVolume';

import { PlayerContainer } from '../styled-components/player/player';

//DataSong ===== MusicControl ===== MusicVolume

function Player({ selectedSong }) {
  if (Object.entries(selectedSong).length === 0) {
    return null;
  }
  const {
    name,
    album: { images },
    preview_url
  } = selectedSong;
  return (
    <PlayerContainer>
      <DataSong image={images} name={name} />
      <MusicControl track={preview_url} />
    </PlayerContainer>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps)(Player);
