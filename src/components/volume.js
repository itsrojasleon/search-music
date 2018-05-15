import React from 'react';

const Volume = ({ onInputChange, value }) => {
  return (
    <input
      type="range"
      onChange={onInputChange}
      max={1}
      min={0}
      step={.05}
      className="input-range"
      value={value}
    />
  )
}

export default Volume;