import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Track from '../components/track';
import { toggleView } from '../actions/toggle';
import { songInPlay } from '../actions/songInPlay';
import ButtonView from '../components/button-view';

class Card extends Component {
  componentDidMount() {
    this.props.songInPlay(this.props.songs);
  }
  render() {
    const { songs, toggle, toggleView } = this.props;
    return (
      <div className="track-container">
        <ButtonView
          onToggle={toggleView}
          toggleValue={toggle}
        />
        <div className={toggle === false ? `track-grid-box` : `track-grid-list` }>
          {songs.map(song => (
            <Track
              customStyle={toggle}
              toggleView={toggleView}
              key={song.id}
              {...song}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ songs, toggle }) => ({
  songs,
  toggle,
});
const mapDispatchToProps = (dispatch) => ({
  toggleView: bindActionCreators(toggleView, dispatch),
  songInPlay: bindActionCreators(songInPlay, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);