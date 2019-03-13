import React from 'react';
import { Container } from '../styled-components/player/music-volume';

function MusicVolume(props) {
  // const [value, setValue] = React.useState();
  const handleChange = e => props.setVolume(e.target.value);
  console.log(props.volume);
  return (
    <Container>
      <input
        type="range"
        onChange={handleChange}
        value={props.volume}
        min={0}
        max={1}
        step={0.05}
      />
    </Container>
  );
}
export default MusicVolume;
