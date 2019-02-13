import React from 'react';

function Header() {
  return (
    <div className="ui pointing  menu">
      <button className="active item">Home</button>
      <div className="right menu">
        <a href="/auth/google" className="ui item">
          Login With Google
        </a>
      </div>
    </div>
  );
}
export default Header;
