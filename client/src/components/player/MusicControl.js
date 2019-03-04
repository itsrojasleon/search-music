import React from 'react';
import useSongPlayer from '../hooks/useSongPlayer';
import { Container } from '../styled-components/player/music-control';

function MusicControl(props) {
  const audioEl = React.useRef();

  const [
    currentTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  ] = useSongPlayer(audioEl);
  console.log(playing);
  return (
    <Container onClick={() => console.log('ookokok')}>
      <audio ref={audioEl} controls autoPlay src={props.track} />
    </Container>
  );
}
export default MusicControl;
