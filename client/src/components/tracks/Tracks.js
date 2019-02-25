import React from 'react';
import { connect } from 'react-redux';

import { Container, Image } from '../styled-components/tracks/tracks';

function Songs(props) {
  if (!props.songs) {
    return null;
  }
  return (
    <Container>
      {props.songs.map((song => (
        <div key={song.id}>
          <Image src={song.album.images[0].url} alt={song.name} />
          <h2>{song.artists.name}</h2>
        </div>
      )))}
    </Container>
  );
}
const mapStateToProps = ({ songs }) => ({ songs });
export default connect(mapStateToProps)(Songs);
