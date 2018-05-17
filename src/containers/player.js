import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/description';
import Controls from '../components/controls';


class Player extends Component {
  render() {
    const { selectedSong, theme } = this.props;
    return (
      <div className={theme === false ? 'player-container' : 'player-container-dark'}>
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
const mapStateToProps = ({ selectedSong, theme }) => ({
  selectedSong,
  theme,
});
export default connect(mapStateToProps)(Player);