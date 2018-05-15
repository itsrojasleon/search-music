import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePlay } from '../actions/controls';

class Controls extends React.Component {
  static propTypes = {
    preview_url: Proptypes.string,
  }
  handleRef = (audio) => {
    this.audio = audio;
  }
  togglePlay = () => {
    if (this.props.controls) {
      this.audio.play();
    }else {
      this.audio.pause();
    }
    this.props.togglePlay();
  }
  render() {
    const { preview_url, controls } = this.props;
    return (
      <div>
        <audio
          ref={this.handleRef}
          src={preview_url}
          autoPlay
        />
        <div>
          {controls
            ? <i onClick={this.togglePlay} className="fas fa-play"></i>
            : <i onClick={this.togglePlay} className="fas fa-pause"></i>
          }
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