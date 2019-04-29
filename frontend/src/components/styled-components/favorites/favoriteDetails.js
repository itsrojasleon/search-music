import styled from 'styled-components';

export const Data = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
  padding: 10px;
  @media (max-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  transition: 0.2s;
  &:hover {
    background: rgb(240, 240, 240);
  }
`;
export const Light = styled.div`
  color: rgb(20, 20, 20);
  @media (max-width: 769px) {
    display: ${props => (props.watch ? 'none' : '')};
  }
`;
export const I = styled.i`
  &:hover {
    cursor: pointer;
  }
`;
