import React from 'react';
import { Logout, Text } from '../styled-components/header/header-settings';

function HeaderSettings() {
  return (
    <Logout href="/api/logout">
      <Text>Logout</Text>
      <i style={{ color: 'rgb(0, 0, 0)' }} className="fas fa-sign-out-alt" />
    </Logout>
  );
}
export default HeaderSettings;
