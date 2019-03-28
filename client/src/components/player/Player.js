import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';

import { Container } from '../styled-components/player/player';

//DataSong ===== MusicControl ===== MusicVolume

function Player({ selectedSong }) {
  if (Object.entries(selectedSong).length === 0) {
    return null;
  }
  const {
    name,
    album: { images, artists },
    preview_url
  } = selectedSong;
  return (
    <Container>
      <DataSong artist={artists[0].name} image={images} name={name} />
      <MusicControl track={preview_url} />
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps)(Player);
