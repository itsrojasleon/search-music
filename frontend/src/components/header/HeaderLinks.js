import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from '../styled-components/header/header-links';

function HeaderLinks() {
  return (
    <>
      <Link to="/favorites">
        <Element>Favorites</Element>
      </Link>
    </>
  );
}
export default HeaderLinks;
