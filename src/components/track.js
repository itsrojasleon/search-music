import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSong } from '../actions/selectSong';
import { setPlay, setPause } from '../actions/controls';

class Track extends React.Component {
  state = {
    hover: false,
  }
  static propTypes = {
    customStyle: PropTypes.bool.isRequired,
    song: PropTypes.object.isRequired,
  }
  handleSong = () => {
    // selected song
    this.props.selectSong(this.props.song);
    // start other song
    if (this.props.controls.paused) {
      this.props.setPlay();
    }else {
      this.props.setPause();
    }
    if(this.props.selectedSong.id !== this.props.song.id) {
      this.props.setPlay();
    }
  }
  render() {
    const { customStyle, selectedSong, song, controls: { paused } } = this.props;
    return (
      <div onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })} className={customStyle === false ? 'track-box' : 'track-list'}>
        <figure className="figure">
          <span className="artist-image-container">
            <img className="artist-image" width="100%" src={`${song.album.images[0].url}`} alt={`${song.album.name}`} height="auto" />
          </span>
          {/*Here*/}
          {this.state.hover === false && selectedSong.id !== song.id
            ? null
            : <i onClick={this.handleSong} className={selectedSong.id === song.id && paused === false ? 'fas fa-pause play' : 'fas fa-play play'}></i>
          }
        </figure>
        <div style={{ color: selectedSong.id === song.id ? 'rgb(222,0,62)' : '' }} className="description">
          <p>{song.name}</p>
          <p>{song.artists[0].name}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ selectedSong, controls }) => ({
  selectedSong,
  controls
});
const mapDispatchToProps = (dispatch) => ({
  selectSong: bindActionCreators(selectSong, dispatch),
  setPlay: bindActionCreators(setPlay, dispatch),
  setPause: bindActionCreators(setPause, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Track);