import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ name, album, artists }) => {
  return (
    <div>
      <img src={album.images[1].url} alt={name} />
      {name}
      <p>{artists[0].name}</p>
    </div>
  )
}
Description.propTypes = {
  name: PropTypes.string.isRequired,
  album: PropTypes.object.isRequired,
  artists: PropTypes.array.isRequired,
}
export default Description;