import React from 'react';
import { Container } from '../styled-components/player/music-control';

function MusicControl(props) {
  return (
    <Container>
      <audio controls src={props.track} />
    </Container>
  );
}
export default MusicControl;
