import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
  render() {
    return (
      <div>
        {/*<img src={something.images[1].url} />*/}
      </div>
    );
  }
}
export default connect()(Player);