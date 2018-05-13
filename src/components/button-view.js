import React from 'react';

const ButtonView = ({ onToggle, toggleValue }) => {
  return (
    <span style={{textAlign: 'right', margin: '0 auto 20px auto', display: 'block'}}>
      <span style={{marginRight: 5, color: '#727272'}}>View: </span>
      {toggleValue === false
        ? <i onClick={onToggle} className="fas fa-th"></i>
        : <i onClick={onToggle} className="fas fa-list-ul"></i>
      }
    </span>
  )
}

export default ButtonView;