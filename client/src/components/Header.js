import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ auth }) {
  return (
    <div className="ui pointing  menu">
      <button className="active item">Home</button>
      <div className="right menu">
        {auth ? (
          <a href="/auth/logout">Logout</a>
        ) : (
          <a href="/auth/google" className="ui item">
            Login With Google
          </a>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
