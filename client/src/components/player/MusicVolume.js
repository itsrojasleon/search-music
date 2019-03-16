import React from 'react';
import {
  Container,
  BarProgress,
  BarProgressKnob
} from '../styled-components/player/music-volume';

function MusicVolume(props) {
  const { currentVolume, onVolumeUpdate } = props;

  const volumeEl = React.useRef();

  const currentPercentage = currentVolume * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const volume = volumeEl.current;
    if (!volume) return;
    const volumeStart = volume.getBoundingClientRect().left + window.scrollX;
    const volumeWidth = volume.offsetWidth;
    const clickPositionInVolume = clickPositionInPage - volumeStart;
    const timePerPixel = 1 / volumeWidth;
    return timePerPixel * clickPositionInVolume;
  }

  function handleTimeDrag(e) {
    onVolumeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      if (calcClickedTime(eMove) > 1 || calcClickedTime(eMove) < 0) return;
      onVolumeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }
  return (
    <Container>
      <BarProgress
        ref={volumeEl}
        style={{
          background: `linear-gradient(to right, rgb(50,50,50) ${currentPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}>
        <BarProgressKnob style={{ left: `${currentPercentage - 2}%` }} />
      </BarProgress>
    </Container>
  );
}
export default MusicVolume;
