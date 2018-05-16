import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ name, album, artists }) => {
  return (
    <div className="player-description">
      <img className="image-description" height="auto" src={album.images[1].url} alt={name} />
      <div className="small-description">
        <span>{name}</span>
        <span style={{ color: '#727272' }}>{artists[0].name}</span>
      </div>
    </div>
  )
}
Description.propTypes = {
  name: PropTypes.string.isRequired,
  album: PropTypes.object.isRequired,
  artists: PropTypes.array.isRequired,
}
export default Description;