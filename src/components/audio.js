import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ setRef, src, play, onLoadedMetadata, onTimeUpdate }) => {
  return (
    <audio
      ref={setRef}
      src={src}
      autoPlay={play === false ? true : false}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
    />
  )
}
Audio.propTypes = {
  setRef: PropTypes.func,
  src: PropTypes.string,
  onLoadedMetadata: PropTypes.func,
  onTimeUpdate: PropTypes.func,
}
export default Audio;