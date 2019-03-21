import React from 'react';
import {
  Container,
  Image,
  Name,
  ArtistName,
  Icons,
  I
} from '../styled-components/tracks/track-details';

function TrackDetail(props) {
  const [hover, setHover] = React.useState(false);
  const { name, album, artists, selectedSong } = props;

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Image src={album.images[0].url} alt={name} />
      <Name>{name}</Name>
      <ArtistName>{artists[0]['name']}</ArtistName>
      {hover && (
        <Icons>
          <I className="fas fa-play" />
          <I className="fas fa-heart" />
        </Icons>
      )}
    </Container>
  );
}
export default TrackDetail;
