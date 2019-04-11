import React from 'react';
import { connect } from 'react-redux';
import useSongPlayer from '../hooks/useSongPlayer';
import MusicVolume from './MusicVolume';
import Bar from './Bar';
import { selectSong } from '../../actions/index';
import {
  Container,
  Controls,
  Icons,
  I
  // Icon
} from '../styled-components/player/music-control';

function MusicControl(props) {
  const audioEl = React.useRef();

  // I need all the controls for make a song
  const [
    currentTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    setClickedVolume,
    currentVolume,
    resetVolume
  ] = useSongPlayer(audioEl);
  // Dont make console.log for  inputEl.current.something
  // Because always is going to be undefined
  // Make sure the song is saved in localStorage
  // Or do it in useSongPlayer.js (Hook)

  const previousTrack = () => {
    if (props.index === 0) return null;
    return props.selectSong(props.data[props.index - 1], (props.index - 1))
  };

  const nextTrack = () => {
    if (props.index === props.data.length - 1) return null;
    props.selectSong(props.data[props.index + 1], (props.index + 1));
  }

  return (
    <React.Fragment>
      <Container>
        <audio ref={audioEl} src={props.track} />
        <Controls>
          <Icons>
            <I onClick={previousTrack} opacity={props.index === 0 && true} size="small" className="fas fa-step-backward" />
            {playing ? (
              <I onClick={() => setPlaying(false)} className="fas fa-pause" />
            ) : (
              <I onClick={() => setPlaying(true)} className="fas fa-play" />
            )}
            <I onClick={nextTrack} opacity={(props.index === props.data.length - 1) && true} size="small" className="fas fa-step-forward" />
          </Icons>
          <Bar
            currentTime={currentTime}
            duration={duration}
            onTimeUpdate={time => setClickedTime(time)}
          />
        </Controls>
      </Container>
      {/* Here's the volume component */}
      <MusicVolume
        currentVolume={currentVolume}
        onVolumeUpdate={vol => setClickedVolume(vol)}
        resetVolume={bool => resetVolume(bool)}
      />
    </React.Fragment>
  );
}
export default connect(null, { selectSong })(MusicControl);

