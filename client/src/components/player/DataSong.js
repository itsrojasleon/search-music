import React from 'react';
import {
  Image,
  Description,
  Name
} from '../styled-components/player/data-song';

function DataSong({ name, image }) {
  return (
    <Description>
      <Image src={`${image[0].url}`} />
      <Name>{name}</Name>
    </Description>
  );
}
export default DataSong;
