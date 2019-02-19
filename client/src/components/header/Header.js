import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  HeaderWrapper,
  Nav,
  Title,
  GoogleButton,
  Logout,
  Img
} from '../styled-components/header/header';

function Header({ auth }) {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Title>SearchBar</Title>
        </Link>
        {/* Validate... If exists a user */}
        <>
          {auth ? (
            <Img
              onClick={() => console.log('ok')}
              src={auth.userImage}
              alt={auth.userName}
            />
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
