import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { togglePlay } from '../actions/controls';

class Controls extends React.Component {
  static propTypes = {
    preview_url: Proptypes.string,
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
  onInputChange = (e) => {
    this.audio.volume = e.target.value;
  }
  handleLoadedMetaData = (e) => {
    // this.audio.duration = e.target.value;
  }
  render() {
    const { preview_url, controls } = this.props;
    return (
      <div>
        <audio
          ref={this.handleRef}
          src={preview_url}
          autoPlay
          onLoadedMetadata={this.handleLoadedMetaData}
        />
        <div>
          {controls.paused
            ? <i onClick={this.togglePlay} className="fas fa-play"></i>
            : <i onClick={this.togglePlay} className="fas fa-pause"></i>
          }
        </div>
        <div>
          <input
            type="range"
            onChange={this.onInputChange}
            max={1}
            min={0}
            step={.05}
            className="input-range"
          />
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
export default connect(mapStateToProps, { togglePlay })(Controls);