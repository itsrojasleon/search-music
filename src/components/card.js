import React from 'react';

const Card = (props) => {
  return (
    <div>
      <img src={`${props.album.images[0].url}`} />
    </div>
  )
}

export default Card;