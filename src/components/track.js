import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onMouseEnter, onMouseLeave } from '../actions/songs';

class Track extends React.Component {

  render() {
    const { customStyle } = this.props;
    // onMouseEnter={onEnter} onMouseLeave={onLeave}
    return (
      <div onMouseEnter={() => onMouseEnter(this.props.id)} onMouseLeave={() => onMouseLeave(this.props.id)} className={customStyle === false ? 'track-box' : 'track-list'}>
        <figure className={customStyle === false ? 'figure' : 'figure-list'}>
          <span className="artist-image-container">
            <img className="artist-image" width="100%" src={`${this.props.album.images[0].url}`} alt={`${this.props.album.name}`} height="auto" />
          </span>
          <i className={customStyle === false ? 'fas fa-play play' : 'fas fa-play play-list' }></i>
        </figure>
        <div className={customStyle === false ? '' : 'description'}>
          <p>{this.props.name}</p>
          <p>{this.props.artists[0].name}</p>
        </div>
      </div>
    )
  }
}
Track.propTypes = {
  customStyle: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
}
export default connect(null, { onMouseEnter, onMouseLeave })(Track);