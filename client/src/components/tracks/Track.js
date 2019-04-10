import React from 'react';
import { connect } from 'react-redux';
import TrackDetail from './TrackDetails';
import { Container, Box } from '../styled-components/tracks/track';
import { selectSong } from '../../actions/index';

function Track(props) {
  return (
    <Container>
      {props.songs.map((song, i) => (
        <Box
          isSelected={song.id === props.selectedSong.id}
          onClick={() => props.selectSong(song, i)}
          key={song.id}>
          <TrackDetail {...song} />
        </Box>
      ))}
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({
  songs: songs.fetchedSongs,
  selectedSong: songs.selectedSong
});
export default connect(
  mapStateToProps,
  { selectSong }
)(Track);
