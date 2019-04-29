import React, { useState } from 'react';
import { Data, Light, I } from '../styled-components/favorites/favoriteDetails';

function FavoriteDetails(props) {
  const [hover, setHover] = useState(false);
  const { track, index, selectSong, mobile } = props;
  return (
    <Data
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}>
      <div>
        {hover ? (
          <I onClick={() => selectSong(track, index)} className="fas fa-play" />
        ) : (
          index + 1
        )}
      </div>
      <Light>{track.name}</Light>
      <Light>{track.artists[0]['name']}</Light>
      {!mobile && <Light>{track.album.name}</Light>}
    </Data>
  );
}
export default FavoriteDetails;
