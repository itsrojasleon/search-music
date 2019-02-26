import React from 'react';
import { connect } from 'react-redux';
import TrackDetail from './TrackDetails';

import { Container } from '../styled-components/tracks/track';

function Track(props) {
  if (!props.songs) {
    return '';
  }
  return (
    <Container>
      {props.songs.map((song => (
        <div key={song.id}>
          <TrackDetail {...song} />
        </div>
      )))}
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({ songs });
export default connect(mapStateToProps)(Track);
