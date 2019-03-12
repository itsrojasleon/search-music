import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 100%;
`;
export const Controls = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const I = styled.i`
  border-radius: 50%;
  padding: 13px;
  transition: 0.2s;
  &:hover {
    background: rgb(239, 239, 239);
    cursor: pointer;
  }
`;
