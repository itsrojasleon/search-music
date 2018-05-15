import React from 'react';
import Proptypes from 'prop-types';
import Audio from './audio';
import Volume from './volume';

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

  handleToggleVolume = () => {
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
      <div>
        <Audio
          setRef={this.handleRef}
          src={preview_url}
        />
        <div>
          {paused
            ? <i onClick={this.togglePlay} className="fas fa-play"></i>
            : <i onClick={this.togglePlay} className="fas fa-pause"></i>
          }
        </div>
        <div>
          {this.audio && (
            <span onClick={this.handleToggleVolume} className="volume-icon">
              {volume === 0 && <i className="fas fa-volume-off"></i>}
              {volume > 0 && volume <= .5 && <i className="fas fa-volume-down"></i>}
              {volume > .5 && <i className="fas fa-volume-up"></i>}
            </span>
          )}
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