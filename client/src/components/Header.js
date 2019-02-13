import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ auth }) {
  return (
    <div className="ui pointing  menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <div className="right menu">
        {auth ? (
          <a href="/api/logout">Logout</a>
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
