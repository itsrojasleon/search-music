import React from 'react';
import { connect } from 'react-redux';
import TrackDetail from './TrackDetails';

import { Container } from '../styled-components/tracks/track';
import { selectSong } from '../../actions/index';

function Track(props) {
  return (
    <Container>
      {props.songs.map((song => (
        <div onClick={() => props.selectSong(song)} key={song.id}>
          <TrackDetail {...song} />
        </div>
      )))}
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({
  songs: songs.fetchedSongs,
  selectedSong: songs.selectedSong
});
export default connect(mapStateToProps, { selectSong })(Track);
