import React from 'react';
import { connect } from 'react-redux';

function Songs(props) {
  if (!props.songs) {
    return null;
  }
  return (
    <div>
      {props.songs.map((song => (
        <div key={song.id}>
          <img src={song.album.images[0].url} alt={song.name} />
          <h2>{song.artists.name}</h2>
        </div>
      )))}
    </div>
  );
}
const mapStateToProps = ({ songs }) => ({ songs });
export default connect(mapStateToProps)(Songs);
