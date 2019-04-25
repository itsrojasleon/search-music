import React from 'react';
import {
  Container,
  Titles,
  Bold,
  Data,
  Light
} from '../styled-components/favorites/favoriteDetails';

function FavoriteDetails(props) {
  const { name, artists, album } = props;
  return (
    <Container>
      <Titles>
        <Bold>Track</Bold>
        <Bold>Artist</Bold>
        <Bold style={{ textAlign: 'left' }}>Album</Bold>
      </Titles>
      <Data>
        <Light>{name}</Light>
        <Light>{artists[0]['name']}</Light>
        <Light>{album.name}</Light>
      </Data>
    </Container>
  );
}
export default FavoriteDetails;
