import React from 'react';

const ButtonView = ({ onToggle, toggleValue }) => {
  return (
    <span>
      <span style={{marginRight: 5}}>View: </span>
      {toggleValue === false
        ? <i onClick={onToggle} className="fas fa-th"></i>
        : <i onClick={onToggle} className="fas fa-list-ul"></i>
      }
    </span>
  )
}

export default ButtonView;