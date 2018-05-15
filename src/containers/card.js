import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Track from '../components/track';
import { toggleView } from '../actions/toggle';
import ButtonView from '../components/button-view';

class Card extends Component {
  render() {
    const { track, toggle, toggleView } = this.props;
    return (
      <div className="track-container">
        <ButtonView
          onToggle={toggleView}
          toggleValue={toggle}
        />
        <div className={toggle === false ? `track-grid-box` : `track-grid-list` }>
          {track.map(song => (
            <Track
              customStyle={toggle}
              toggleView={toggleView}
              key={song.id}
              song={song}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ songs, toggle }) => {
  const track = songs.filter((song) => song.preview_url !== null)
  return {
    track,
    toggle,
  }
};
const mapDispatchToProps = (dispatch) => ({
  toggleView: bindActionCreators(toggleView, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);