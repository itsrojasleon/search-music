import React from 'react';
import { Container, Image, Name } from '../styled-components/player/data-song';

function DataSong({ name, image }) {
  return (
    <Container>
      <Image src={`${image[0].url}`} />
      <Name>{name}</Name>
    </Container>
  );
}
export default DataSong;
