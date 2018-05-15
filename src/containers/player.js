import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../components/description';

class Player extends Component {
  render() {
    const { songInPlay } = this.props;
    return (
      <div>
        <Description
          {...songInPlay}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ songInPlay }) => ({
  songInPlay
});
export default connect(mapStateToProps)(Player);