import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgb(240, 240, 240);
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
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;
export const GoogleButton = styled.a`
  color: black;
  border: 1px solid #ccc;
  padding: 7px 10px;
  border-radius: 5px;
`;
export const Title = styled.span`
  color: black;
  font-size: 22px;
  font-family: 'Colfax Bold';
  text-align: center;
  padding-top: 22px;
`;
export const Img = styled.img`
  border-radius: 50%;
  width: 38px;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
