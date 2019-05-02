import styled from 'styled-components';

export const Logout = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid rgb(240, 240, 240);
  width: 250px;
  position: fixed;
  right: 1px;
  top: 67px;
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(26, 26, 29, 0.08);
  &:hover {
    background-color: rgb(250, 250, 250);
    cursor: pointer;
  }
  @media (max-width: 769px) {
    width: 100%;
    z-index: 999;
  }
`;
export const Text = styled.p`
  color: rgb(0, 0, 0);
`;
