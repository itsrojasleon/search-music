import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/description';
import Controls from '../components/controls';

class Player extends Component {
  handleRef = (audio) => {
    this.audio = audio;
  }
  render() {
    const { selectedSong } = this.props;
    return (
      <div>
        <Description
          {...selectedSong}
        />
        <Controls
          {...selectedSong}
          setRef={this.handleRef}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ selectedSong }) => ({
  selectedSong
});
export default connect(mapStateToProps)(Player);