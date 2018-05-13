import React from 'react';
import PropTypes from 'prop-types';

const Track = (props) => {
  const { customStyle } = props;
  return (
    <div className={customStyle === false ? 'track-box' : 'track-list'}>
      <img style={{ borderRadius: 8 }} width={customStyle === false ? '100%' : '20%' } src={`${props.album.images[0].url}`} alt={`${props.album.name}`} height="auto" />
      <div className={customStyle === false ? '' : 'description'}>
        <p>{props.name}</p>
        <p>{props.artists[0].name}</p>
      </div>
    </div>
  )
}
Track.propTypes = {
  customStyle: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
}
export default Track;