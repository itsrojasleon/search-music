import React from 'react';
import { Logout } from '../styled-components/header/header-settings';

function HeaderSettings() {
  return (
    <div>
      <Logout href="/api/logout">Logout</Logout>
    </div>
  );
}
export default HeaderSettings;
