import React from 'react';
import {
  Image,
  Name,
  ArtistName
} from '../styled-components/tracks/track-details';

function TrackDetail(props) {
  return (
    <>
      <Image src={props.album.images[0].url} alt={props.name} />
      <Name>{props.name}</Name>
      <ArtistName>{props.artists[0]['name']}</ArtistName>
    </>
  );
}
export default TrackDetail;