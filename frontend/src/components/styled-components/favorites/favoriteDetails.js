import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: white;
  border: 1px solid rgb(230, 230, 230);
  padding: 10px;
`;
const sameStyle = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;
export const Titles = styled.div`
  ${sameStyle};
`;
export const Data = styled.div`
  ${sameStyle};
`;
