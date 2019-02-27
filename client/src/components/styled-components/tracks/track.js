import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 196px);
  grid-gap: 40px;
  margin-bottom: 80px;
  @media(max-width: 769px) {
    grid-template-columns: repeat(auto-fill, 230px);
    justify-items: center;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
  }
`;