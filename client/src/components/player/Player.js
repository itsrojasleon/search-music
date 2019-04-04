import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';

import { Container, I } from '../styled-components/player/player';

function Player({ selectedSong }) {
  const [hide, setHide] = React.useState(false);
  if (Object.entries(selectedSong).length === 0) {
    return null;
  }
  const {
    name,
    album: { images, artists },
    preview_url
  } = selectedSong;
  return (
    <Container hide={hide}>
      <I onClick={() => setHide(!hide)} className="fas fa-chevron-down" />
      <DataSong artist={artists[0].name} image={images} name={name} />
      <MusicControl track={preview_url} />
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps)(Player);
