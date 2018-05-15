import React from 'react';
// import PropTypes from 'prop-types';

const Audio = ({ setRef, src }) => {
  return (
    <audio
      ref={setRef}
      src={src}
      autoPlay
    />
  )
}

export default Audio;