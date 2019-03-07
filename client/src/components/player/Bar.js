import React from 'react';
import {
  Container,
  BarTime,
  BarProgress,
  BarProgressKnob
} from '../styled-components/player/bar';

function Bar(props) {
  const { duration, currentTime, onTimeUpdate } = props;

  const barEl = React.useRef();

  const currentPercentage = (currentTime / duration) * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = barEl.current;
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }
  return (
    <Container>
      <BarTime>
        {typeof currentTime !== 'number' ? '' : currentTime.toFixed(2)}
      </BarTime>
      <BarProgress
        ref={barEl}
        style={{
          background: `linear-gradient(to right, #000 ${currentPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}>
        <BarProgressKnob style={{ left: `${currentPercentage - 2}%` }} />
      </BarProgress>
      <span>{typeof duration !== 'number' ? '' : duration.toFixed(2)}</span>
    </Container>
  );
}
export default Bar;
