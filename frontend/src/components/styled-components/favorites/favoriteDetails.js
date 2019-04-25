import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 10px;
  margin-top: 10px;
`;
const sameStyle = css`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;
export const Titles = styled.div`
  ${sameStyle};
  font-weight: bolder;
`;
export const Bold = styled.div`
  color: black;
  font-family: 'Colfax Medium';
`;
export const Data = styled.div`
  ${sameStyle};
`;
export const Light = styled.div`
  color: rgb(20, 20, 20);
`;
