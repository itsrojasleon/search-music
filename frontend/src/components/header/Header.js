import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderLinks from './HeaderLinks';
import HeaderSettings from './HeaderSettings';

import {
  HeaderWrapper,
  Nav,
  Container,
  Title,
  GoogleButton,
  Img
} from '../styled-components/header/header';

function Header({ auth }) {
  const [on, setOn] = useState(false);
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Title>SearchMusic</Title>
        </Link>
        {/* Validate... If exists a user */}
        <Container>
          <HeaderLinks />
          <>
            {auth ? (
              <>
                <Img
                  onClick={() => setOn(!on)}
                  src={auth.userImage}
                  alt={auth.userName}
                />
                {on && <HeaderSettings />}
              </>
            ) : (
              <GoogleButton href="/auth/google">Login with Google</GoogleButton>
            )}
          </>
        </Container>
      </Nav>
    </HeaderWrapper>
  );
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
