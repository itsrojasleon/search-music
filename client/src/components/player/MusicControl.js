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
  return (
    <Container onClick={() => console.log('ookokok')}>
      <audio ref={audioEl} controls src={props.track} />
      {playing ? (
        <div onClick={() => setPlaying(false)}>Pause ⏸</div>
      ) : (
        <div onClick={() => setPlaying(true)}>Play ▶️</div>
      )}
    </Container>
  );
}
export default MusicControl;
