import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedSong } from '../actions/selectSong';

class Track extends React.Component {
  static propTypes = {
  customStyle: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
}
  render() {
    const { customStyle, selectSong, id } = this.props;
    // onMouseEnter={onEnter} onMouseLeave={onLeave}
    return (
      <div className={customStyle === false ? 'track-box' : 'track-list'}>
        <figure className="figure">
          <span className="artist-image-container">
            <img className="artist-image" width="100%" src={`${this.props.album.images[0].url}`} alt={`${this.props.album.name}`} height="auto" />
          </span>
          <i onClick={() => this.props.selectedSong(id)} className={selectSong === id ? 'fas fa-pause play' : 'fas fa-play play'}></i>
        </figure>
        <div style={{ color: selectSong === id ? 'rgb(222,0,62)' : '' }} className="description">
          <p>{this.props.name}</p>
          <p>{this.props.artists[0].name}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ selectSong }) => ({
  selectSong,
});
const mapDispatchToProps = (dispatch) => ({
  selectedSong: bindActionCreators(selectedSong, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Track);