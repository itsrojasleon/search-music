import React from 'react';
import Proptypes from 'prop-types';

const Controls = ({ preview_url, handleRef }) => {
  return (
    <div>
      <audio
        ref={handleRef}
        src={preview_url}
        controls
      />
    </div>
  )
}
Controls.propTypes = {
  preview_url: Proptypes.string.isRequired,
}
export default Controls;