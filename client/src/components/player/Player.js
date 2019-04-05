import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';

import { Container, I, Open } from '../styled-components/player/player';

function Player({ selectedSong }) {
  // This only works on mobile devices
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
    <React.Fragment>
      <Container hide={hide}>
        <I onClick={() => setHide(true)} className="fas fa-chevron-down" />
        <DataSong artist={artists[0].name} image={images} name={name} />
        <MusicControl track={preview_url} />
      </Container>
      <Open>open bro</Open>
    </React.Fragment>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps)(Player);
