import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/description';
import Controls from '../components/controls';


class Player extends Component {
  render() {
    const { selectedSong } = this.props;
    return (
      <div className="player-container">
        <Description
          {...selectedSong}
        />
        <Controls
          {...selectedSong}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ selectedSong }) => ({
  selectedSong
});
export default connect(mapStateToProps)(Player);