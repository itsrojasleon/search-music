import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  @media (max-width: 769px) {
    margin: 0 auto 30px auto;
  }
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
    flex-direction: column;
    margin: 0;
    flex-grow: 0;
  }
`;
export const Icons = styled.span`
  margin-bottom: 10px;
  @media (max-width: 769px) {
    margin-bottom: 25px;
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
  @media (max-width: 769px) {
    font-size: 20px;
  }
`;
export const Icon = styled.span`
  justify-self: end;
  padding-right: 8px;
`;
