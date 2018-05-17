import React from 'react';
import PropTypes from 'prop-types';
import { helperTime } from '../utils/helper';

const Progress = ({ duration, progress }) => {
  return (
    <div className="container">
      <span className="first-number">
        {progress
          ? <span>{helperTime(progress)}</span>
          : <span>0.0</span>
        }
      </span>
      <div className="progress-container">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="second-number">{helperTime(duration)}</span>
    </div>
  );
}

Progress.propTypes = {
  duration: PropTypes.number,
  progress: PropTypes.number,
}

export default Progress;