import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;
export const Nav = styled.nav`
  width: 80%;
  margin: auto;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 769px) {
    width: 98%;
  }
`;
export const Title = styled.h2`
  color: black;
  font-family: 'Colfax Bold';
`;
export const GoogleButton = styled.a`
  color: black;
  border: 1px solid #ccc;
  padding: 7px 10px;
  border-radius: 5px;
`;
export const Logout = styled.a`
  color: black;
`;
