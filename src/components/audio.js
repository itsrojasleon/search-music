import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ setRef, src, play }) => {
  return (
    <audio
      ref={setRef}
      src={src}
      autoPlay={play === false ? true : false}
    />
  )
}
Audio.propTypes = {
  setRef: PropTypes.func,
  src: PropTypes.string,
}
export default Audio;