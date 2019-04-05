import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border-top: 1px solid rgb(240, 240, 240);
  box-shadow: 2px 0px 9px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  display: ${props => (props.hide ? 'none' : 'grid')};
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  align-items: center;
  @media (max-width: 769px) {
    height: 100vh;
    box-shadow: 5px 0px 12px rgba(0, 0, 0, 0.05);
    grid-template-columns: repeat(1, 1fr);
    align-content: space-between;
    align-items: center;
    z-index: 999;
  }
`;
export const I = styled.i`
  display: none;
  @media (max-width: 769px) {
    font-size: 24px;
    display: block;
    color: black;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Open = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: ${props => (props.hide ? 'block' : 'none')};
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 999;
    font-size: 18px;
    padding: 10px;
    border-top: 2px solid rgb(240, 240, 240);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
`;
