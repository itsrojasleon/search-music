import React from 'react';
import { Container } from '../styled-components/player/music-control';

function MusicControl(props) {
  const audioEl = React.useRef();
  console.log(audioEl);
  const click = () => audioEl.current.play();
  return (
    <Container onClick={click}>
      <audio ref={audioEl} controls src={props.track} />
    </Container>
  );
}
export default MusicControl;
