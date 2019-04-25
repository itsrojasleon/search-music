import React from 'react';
import {
  Container,
  Titles,
  Data
} from '../styled-components/favorites/favoriteDetails';

function FavoriteDetails(props) {
  const { name, artists, album } = props;
  return (
    <Container>
      <Titles>
        <div>Track</div>
        <div>Artist</div>
        <div>Album</div>
      </Titles>
      <Data>
        <div>{name}</div>
        <div>{artists[0]['name']}</div>
        <div>{album.name}</div>
      </Data>
    </Container>
  );
}
export default FavoriteDetails;
