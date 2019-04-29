import React from 'react';
import { Link } from 'react-router-dom';
import { Element, I } from '../styled-components/header/header-links';

function HeaderLinks() {
  return (
    <>
      <Link to="/favorites">
        <Element>
          <I className="fas fa-heart" />
          Favorites
        </Element>
      </Link>
    </>
  );
}
export default HeaderLinks;
