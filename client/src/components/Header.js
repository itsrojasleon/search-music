import React from 'react';

function Header() {
  return (
    <div className="ui pointing  menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
      <div className="right menu">
        <a className="ui item">Login With Google</a>
      </div>
    </div>
  );
}
export default Header;
