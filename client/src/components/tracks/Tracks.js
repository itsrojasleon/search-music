import React from 'react';
import { connect } from 'react-redux';

function Songs(props) {
  if (!props.songs) {
    return null;
  }
  return (
    <div>
      {props.songs.map((song => (
        <div key={song.id}>{song.name}</div>
      )))}
    </div>
  );
}
const mapStateToProps = ({ songs }) => ({ songs });
export default connect(mapStateToProps)(Songs);
