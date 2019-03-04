import React from 'react';
import useSongPlayer from '../hooks/useSongPlayer';
import { Container } from '../styled-components/player/music-control';

function MusicControl(props) {
  const audioEl = React.useRef();

  const [playing, duration, currentTime, clickedTime] = useSongPlayer(audioEl);
  // console.log(duration);
  return (
    <Container onClick={() => console.log('ookokok')}>
      <audio ref={audioEl} controls src={props.track} />
    </Container>
  );
}
export default MusicControl;
