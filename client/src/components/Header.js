import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  HeaderWrapper,
  Nav,
  Title,
  GoogleButton
} from './styled-components/header';

function Header({ auth }) {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Title>SearchMusic</Title>
        </Link>
        <>
          {auth ? (
            <a href="/api/logout">Logout</a>
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
