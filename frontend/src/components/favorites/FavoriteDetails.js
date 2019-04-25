import React, { useState } from 'react';
import {
  Bold,
  Data,
  Light
} from '../styled-components/favorites/favoriteDetails';

function FavoriteDetails(props) {
  const [hover, setHover] = useState(false);
  const { name, artists, album, index } = props;
  return (
    <Data
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}>
      <div>{hover ? <i className="fas fa-play" /> : index + 1}</div>
      <Light>{name}</Light>
      <Light>{artists[0]['name']}</Light>
      <Light>{album.name}</Light>
    </Data>
  );
}
export default FavoriteDetails;
