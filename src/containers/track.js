import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from '../components/card';

class Track extends Component {
  render() {
    const { songs } = this.props;
    return (
      <div>
        {songs.length === 0
          ? <Redirect to="/search" />
          : songs.map(song => (
              <Card {...song} />
            ))
        }
      </div>
    );
  }
}
const mapStateToProps = ({ songs }) => ({
  songs,
})
export default connect(mapStateToProps)(Track);