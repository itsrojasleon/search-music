import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFavorite } from '../../actions/index';
import LittleModal from '../modal/LittleModal';
import useModal from '../hooks/useModal';
import {
  Container,
  ImageContainer,
  Image,
  Data,
  Name,
  ArtistName,
  Icons,
  I
} from '../styled-components/tracks/track-details';

function TrackDetail(props) {
  const [hover, setHover] = useState(false);
  const { name, album, artists, id, preview_url } = props.song;
  const { selectSong, submitFavorite, index } = props;

  const { open, handleClick } = useModal(false);

  const handleFavorite = () => {
    handleClick();
    submitFavorite({ name, album, artists, id, preview_url });
  };

  return (
    <Container
      onMouseEnter={() => {
        if (window.innerWidth > 769) setHover(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 769) setHover(false);
      }}>
      {/* modal */}
      {open && <div>OPEN BRO</div>}
      <I
        onClick={() => selectSong(props.song, index)}
        small
        className="fas fa-play"
      />
      <ImageContainer>
        <Image src={album.images[0].url} alt={name} />
        {hover && (
          <Icons>
            <I
              onClick={() => selectSong(props.song, index)}
              className="fas fa-play"
            />
            <I onClick={handleFavorite} className="fas fa-heart" />
          </Icons>
        )}
      </ImageContainer>
      <Data>
        <Name>{name}</Name>
        <ArtistName>{artists[0]['name']}</ArtistName>
      </Data>
      <I onClick={handleFavorite} small light className="fas fa-heart" />
    </Container>
  );
}
export default connect(
  null,
  { submitFavorite }
)(TrackDetail);
