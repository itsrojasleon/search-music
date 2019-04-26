import styled, { css } from 'styled-components';

const sameStyle = css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;
export const Data = styled.div`
  ${sameStyle};
`;
export const Light = styled.div`
  color: rgb(20, 20, 20);
`;
export const I = styled.i`
  &:hover {
    cursor: pointer;
  }
`;
