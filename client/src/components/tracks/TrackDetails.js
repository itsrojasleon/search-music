import React from 'react';
import {
  Container,
  Image,
  Name,
  ArtistName
} from '../styled-components/tracks/track-details';

function TrackDetail(props) {
  const [hover, setHover] = React.useState(false);
  const { name, album, artists } = props;
  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Image src={album.images[0].url} alt={name} />
      <Name>{name}</Name>
      <ArtistName>{artists[0]['name']}</ArtistName>
      {hover && (
        <div>
          <i className="fas fa-play" />
        </div>
      )}
    </Container>
  );
}
export default TrackDetail;
