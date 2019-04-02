import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 100%;
  /* background: red; */
`;
export const Controls = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 769px) {
    flex-direction: row;
    background: red;
    margin: 0;
    flex-grow: 0;
  }
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
export const Icon = styled.span`
  justify-self: end;
  padding-right: 8px;
`;
