import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from '../components/card';

class Track extends Component {
  render() {
    const { songs } = this.props;
    return (
      <div className="track-container">
        {songs.length === 0
          ? <Redirect to="/search" />
          : <div className="track-grid">
              {songs.map(song => (
                <Card {...song} />
              ))}
            </div>
        }
      </div>
    );
  }
}
const mapStateToProps = ({ songs }) => ({
  songs,
})
export default connect(mapStateToProps)(Track);