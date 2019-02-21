import React from 'react';
import { connect } from 'react-redux';

function Songs(props) {
  // Start here
  return (
    <div>
      <div>Songs</div>
    </div>
  );
}
const mapStateToProps = ({ songs }) => ({ songs });
export default connect(mapStateToProps)(Songs);
