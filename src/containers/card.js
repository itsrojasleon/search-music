import React, { Component } from 'react';
import { connect } from 'react-redux';
import Track from '../components/track';

class Card extends Component {
  render() {
    const { songs } = this.props;
    return (
      <div className="track-container">
        <div className="track-grid">
          {songs.map(song => (
            <Track key={song.id} {...song} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ songs }) => ({
  songs,
})
export default connect(mapStateToProps)(Card);