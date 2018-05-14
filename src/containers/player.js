import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  filteringSong = () => {
    const { songs, selectedSong } = this.props;
  }
  render() {
    return (
      <div>
        {this.props.songs
          .filter((song) => song.id !== this.props.selectedSong)
          .map((s) => ( <div>{s.id}</div> ))
        }
      </div>
    );
  }
}
const mapStateToProps = ({ songs, selectedSong }) => ({
  songs,
  selectedSong,
});
export default connect(mapStateToProps)(Player);