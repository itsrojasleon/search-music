import React, { Component } from 'react';
import { connect } from 'react-redux';
import Track from '../components/track';
import { toggleView } from '../actions/toggle';
import ButtonView from '../components/button-view';

class Card extends Component {
  onEnter = () => {
    console.log('enter')
  }
  onLeave = () => {
    console.log('leave')
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
              key={song.id} {...song}
              onEnter={this.onEnter}
              onLeave={this.onLeave}
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
})
export default connect(mapStateToProps, { toggleView })(Card);