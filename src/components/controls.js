import React from 'react';
import Proptypes from 'prop-types';
import Audio from './audio';
import Volume from './volume';
import IconVolume from './icon-volume';

import { connect } from 'react-redux';
import { togglePlay, setVolume, setLastVolume } from '../actions/controls';

class Controls extends React.Component {
  static propTypes = {
    preview_url: Proptypes.string,
    controls: Proptypes.object,
  }
  handleRef = (audio) => {
    this.audio = audio;
  }
  togglePlay = () => {
    if (this.props.controls.paused) {
      this.audio.play();
    }else {
      this.audio.pause();
    }
    this.props.togglePlay();
  }
  // Volume
  onInputChange = (e) => {
    this.audio.volume = e.target.value;
    this.props.setVolume(this.audio.volume);
  }

  resetVolume = () => {
    const { volume, lastVolume } = this.props.controls;
    // make the current Value
    this.props.setLastVolume(volume);

    if(this.audio.volume !== 0) {
      this.audio.volume = 0
      this.props.setVolume(this.audio.volume);
    }else {
      this.audio.volume = lastVolume;
      this.props.setVolume(this.audio.volume);
    }
  }
  render() {
    const { preview_url, controls: { paused, volume } } = this.props;
    return (
      <div className="player-controls">
        <Audio
          setRef={this.handleRef}
          src={preview_url}
        />
        <div className="play-pause">
          {paused
            ? <i onClick={this.togglePlay} className="fas fa-play"></i>
            : <i onClick={this.togglePlay} className="fas fa-pause"></i>
          }
        </div>
        <div className="volume">
          <IconVolume resetVolume={this.resetVolume} volume={volume} />
          <Volume value={volume} onInputChange={this.onInputChange} />
        </div>
      </div>
    )
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   togglePlay: bindActionCreators(togglePlay, dispatch),
// });
const mapStateToProps = ({ controls }) => ({
  controls,
})
export default connect(mapStateToProps, { togglePlay, setVolume, setLastVolume })(Controls);