import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  HeaderWrapper,
  Nav,
  Title,
  GoogleButton,
  Logout
} from './styled-components/header';

function Header({ auth }) {
  const renderLogout = () => (
    <div>
      <p>{auth.userName}</p>
      <Logout href="/api/logout">Logout</Logout>
    </div>
  );
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Title>SearchBar</Title>
        </Link>
        <>
          {auth ? (
            renderLogout()
          ) : (
            <GoogleButton href="/auth/google">Login with Google</GoogleButton>
          )}
        </>
      </Nav>
    </HeaderWrapper>
  );
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
