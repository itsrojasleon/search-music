import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions/index';
import { Container, I, Banner } from '../styled-components/player/player';
import DataSong from './DataSong';
import MusicControl from './MusicControl';

function Player(props) {
  const { selectedSong, songs, index, selectSong } = props;
  const [hide, setHide] = React.useState(false);

  // This only needs to works in mobile devices
  useEffect(() => {
    if (window.innerWidth <= 769) setHide(false);
    else setHide(false);
  }, [selectedSong]);

  const previousTrack = () => {
    if (index === 0) return null;
    return selectSong(songs[index - 1], index - 1);
  };

  const nextTrack = () => {
    if (index === songs.length - 1) return null;
    selectSong(songs[index + 1], index + 1);
  };

  if (!selectedSong) return null;

  const {
    name,
    album: { images, artists },
    preview_url
  } = selectedSong;
  return (
    <Fragment>
      <Container hide={hide}>
        <I onClick={() => setHide(true)} className="fas fa-chevron-down" />
        <DataSong artist={artists[0].name} image={images} name={name} />
        <MusicControl
          index={index}
          songs={songs}
          track={preview_url}
          nextTrack={nextTrack}
          previousTrack={previousTrack}
          opacityPrevious={index === 0 ? 'true' : ''}
          opacityNext={index === songs.length - 1 ? 'true' : ''}
        />
      </Container>
      <Banner onClick={() => setHide(false)} hide={hide}>
        <I className="fas fa-chevron-up" />
      </Banner>
    </Fragment>
  );
}
const mapStateToProps = ({ songs }) => ({
  selectedSong: songs.selectedSong.song,
  index: songs.selectedSong.index,
  songs: songs.fetchedSongs
});
export default connect(
  mapStateToProps,
  { selectSong }
)(Player);
