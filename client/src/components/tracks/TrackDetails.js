import React from 'react';
import {
  ImageContainer,
  Image,
  Name,
  ArtistName,
  Icons,
  I
} from '../styled-components/tracks/track-details';

function TrackDetail(props) {
  const [hover, setHover] = React.useState(false);
  const { name, album, artists } = props;

  return (
    <React.Fragment
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <ImageContainer>
        <Image src={album.images[0].url} alt={name} />
        {hover && (
          <Icons>
            <I className="fas fa-play" />
            <I className="fas fa-heart" />
          </Icons>
        )}
      </ImageContainer>
      <Name>{name}</Name>
      <ArtistName>{artists[0]['name']}</ArtistName>
    </React.Fragment>
  );
}
export default TrackDetail;
