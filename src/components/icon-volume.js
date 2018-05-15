import React from 'react';
import PropTypes from 'prop-types';

const IconVolume = ({ volume, resetVolume }) => {
  return (
    <span onClick={resetVolume} className="volume-icon">
      {volume === 0 && <i className="fas fa-volume-off"></i>}
      {volume > 0 && volume <= .5 && <i className="fas fa-volume-down"></i>}
      {volume > .5 && <i className="fas fa-volume-up"></i>}
    </span>
  )
}
IconVolume.propTypes = {
  volume: PropTypes.number.isRequired,
}
export default IconVolume;