import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ name, album, artists }) => {
  return (
    <div>
      {name && album && artists

        ? <div className="player-description">
            <img className="image-description" height="auto" src={album.images[1].url} alt={name} />
            <div className="small-description">
              <span className="text-description">{name}</span>
              <span className="text-description" style={{ color: '#727272' }}>{artists[0].name}</span>
            </div>
          </div>
        : null
      }
    </div>
  )
}
Description.propTypes = {
  name: PropTypes.string,
  album: PropTypes.object,
  artists: PropTypes.array,
}
export default Description;