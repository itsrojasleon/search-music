import React from 'react';
import {
  Container,
  Image,
  Description,
  Name,
  Artist
} from '../styled-components/player/data-song';

function DataSong({ name, image, artist }) {
  return (
    <Container>
      <Image src={`${image[0].url}`} />
      <Description>
        <Name>{name}</Name>
        <Artist>{artist}</Artist>
      </Description>
    </Container>
  );
}
export default DataSong;
