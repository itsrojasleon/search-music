import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Track extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Track Component</div>
    );
  }
}
export default connect()(Track);