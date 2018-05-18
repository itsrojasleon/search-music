import React from 'react';
import Proptypes from 'prop-types';
import Audio from './audio';
import Volume from './volume';
import IconVolume from './icon-volume';
import Progress from './progress';

import { connect } from 'react-redux';
import { setPlay, setPause, setVolume, setLastVolume, setDuration, setTimeUpdate } from '../actions/controls';

class Controls extends React.Component {
  static propTypes = {
    preview_url: Proptypes.string,
    controls: Proptypes.object,
  }
  handleRef = (audio) => {
    this.audio = audio;
  }
  togglePlay = () => {
    if (!this.props.preview_url) return null;
    if (this.props.controls.paused) {
      this.props.setPlay();
      this.audio.play();
    }else {
      this.props.setPause();
      this.audio.pause();
    }
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

  onLoadedMetadata = (e) => {
    this.props.setDuration(this.audio.duration);
    console.log(this.props)
  }
  onTimeUpdate = (e) => {
    this.props.setTimeUpdate(this.audio.currentTime);
  }

  render() {
    const { preview_url, controls: { paused, volume, duration, progress } } = this.props;
    return (
      <div className="player-controls">
        <Audio
          setRef={this.handleRef}
          src={preview_url}
          play={paused}
          onLoadedMetadata={this.onLoadedMetadata}
          onTimeUpdate={this.onTimeUpdate}
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
        <Progress progress={progress} duration={duration} />
      </div>
    )
  }
}
const mapStateToProps = ({ controls }) => ({
  controls,
});
export default connect(mapStateToProps, { setPlay,setPause, setVolume, setLastVolume, setDuration, setTimeUpdate })(Controls);