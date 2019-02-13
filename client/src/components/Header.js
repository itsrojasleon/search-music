import React from 'react';

function Header() {
  return (
    <div className="ui pointing  menu">
      <button className="active item">Home</button>
      <div className="right menu">
        <button className="ui item">Login With Google</button>
      </div>
    </div>
  );
}
export default Header;
