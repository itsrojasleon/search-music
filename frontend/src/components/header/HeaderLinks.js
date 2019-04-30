import React from 'react';
import { NavLink } from 'react-router-dom';
import { I } from '../styled-components/header/header-links';

function HeaderLinks() {
  return (
    <>
      <NavLink
        activeStyle={{
          color: 'rgb(150, 150, 150)'
        }}
        to="/favorites">
        <I className="far fa-heart" />
      </NavLink>
    </>
  );
}
export default HeaderLinks;
