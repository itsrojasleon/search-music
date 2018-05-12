import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img width="100%" src={`${props.album.images[0].url}`} />
    </div>
  )
}

export default Card;