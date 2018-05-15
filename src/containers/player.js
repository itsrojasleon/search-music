import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/description';

class Player extends Component {
  render() {
    return (
      <div>
        {this.props.songInPlay.map((song) => (
          <div key={song.id}>
            <Description
              {...song}
            />
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = ({ songInPlay }) => ({
  songInPlay
});
export default connect(mapStateToProps)(Player);