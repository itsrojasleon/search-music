import React from 'react';
import { connect } from 'react-redux';
import { Container, Box } from '../styled-components/tracks/track';
import { selectSong } from '../../actions/index';
import TrackDetail from './TrackDetails';
import TrackFeedback from './TrackFeedback';

function Track(props) {
  const { songs, selectSong } = props;
  if (songs.length === 0) return <TrackFeedback />;
  return (
    <Container>
      {songs.map((song, i) => (
        <Box
          isSelected={song.id === props.selectedSong.id}
          // onClick={() => selectSong(song, i)}
          key={song.id}>
          <TrackDetail index={i} selectSong={selectSong} song={song} />
        </Box>
      ))}
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({
  songs: songs.fetchedSongs,
  selectedSong: songs.selectedSong,
  favoriteSongs: songs.favoriteSongs
});
export default connect(
  mapStateToProps,
  { selectSong }
)(Track);
