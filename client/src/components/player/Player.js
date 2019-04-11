import React from 'react';
import { connect } from 'react-redux';
import DataSong from './DataSong';
import MusicControl from './MusicControl';

import { Container, I, Banner } from '../styled-components/player/player';

function Player({ selectedSong, songs, index }) {
  // This only works on mobile devices
  const [hide, setHide] = React.useState(false);

  // This only needs to works in mobile devices
  React.useEffect(() => {
    if (window.innerWidth <= 769) {
      setHide(false);
    }
  }, [selectedSong]);

  // if (Object.entries(selectedSong).length === 0) {
  //   return null;
  // }
  if (!selectedSong) {
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
        <MusicControl index={index} songs={songs} track={preview_url} />
      </Container>
      <Banner onClick={() => setHide(false)} hide={hide}>
        <I className="fas fa-chevron-up" />
      </Banner>
    </React.Fragment>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong.song,
  index: songs.selectedSong.index,
  songs: songs.fetchedSongs
});
export default connect(mapStateToProps)(Player);
