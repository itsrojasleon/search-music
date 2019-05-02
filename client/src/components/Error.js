import React from 'react';
import { Container } from './styled-components/error';

function Error() {
  return (
    <Container>
      <h3>Something is wrong</h3>
      <br />
      <p>Please check your internet connection.</p>
    </Container>
  );
}
export default Error;
