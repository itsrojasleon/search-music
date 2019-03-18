import React from 'react';
import {
  Container,
  BarProgress,
  BarProgressKnob,
  Icons
} from '../styled-components/player/music-volume';

function MusicVolume(props) {
  const [click, setClick] = React.useState('yes');
  const { currentVolume, onVolumeUpdate, resetVolume } = props;

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
    const value = timePerPixel * clickPositionInVolume;

    //  Validate from 0 to 1
    // Sometimes the value is > 1 or < 0
    // That's why exists this validation
    if (value > 1 || value < 0) return;
    return timePerPixel * clickPositionInVolume;
  }

  function handleTimeDrag(e) {
    onVolumeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onVolumeUpdate(calcClickedTime(eMove));
    };
    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }
  const _resetVolume = () => {
    setClick(click === 'yes' ? 'no' : 'yes');
    resetVolume(click);
  };
  const renderIcons = () => (
    <Icons onClick={_resetVolume}>
      {currentVolume === 0 && <i className="fas fa-volume-off" />}
      {currentVolume > 0 && currentVolume <= 0.5 && (
        <i className="fas fa-volume-down" />
      )}
      {currentVolume > 0.5 && <i className="fas fa-volume-up" />}
    </Icons>
  );
  return (
    <Container>
      {renderIcons()}
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
