import React from 'react';

const Track = (props) => {
  return (
    <div>
      <img width="100%" src={`${props.album.images[0].url}`} alt={`${props.album.name}`} />
    </div>
  )
}

export default Track;