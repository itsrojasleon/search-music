import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ auth }) {
  return (
    <div className="ui pointing  menu">
      <Link to="/" className="item">
        <h2>SearchMusic</h2>
      </Link>
      <div className="right menu">
        {auth ? (
          <a href="/api/logout">Logout</a>
        ) : (
          <a href="/auth/google" className="ui item">
            <div className="ui labeled button" tabIndex="0">
              <span className="ui basic label">
                <i className="google icon" />
                Login with Google
              </span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
