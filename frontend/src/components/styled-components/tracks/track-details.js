import styled from 'styled-components';

export const Container = styled.span`
  @media (max-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-bottom: 10px;
    align-items: center;
    width: 100%;
    padding: 3px;
  }
`;
export const ImageContainer = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 769px) {
    width: 35%;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  transition: 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
  @media (max-width: 769px) {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
  }
`;
export const Data = styled.span`
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
  }
`;
export const Name = styled.p`
  font-size: 18px;
  @media (max-width: 769px) {
    font-size: 15px;
  }
`;
export const ArtistName = styled.p`
  color: rgb(140, 140, 148);
  font-size: 16px;
  margin-top: 3px;
  @media (max-width: 769px) {
    font-size: 13px;
  }
`;
export const Icons = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  padding: 5px;
  text-align: center;
  @media (max-width: 769px) {
    display: none;
  }
`;
export const I = styled.i`
  color: white;
  opacity: 1;
  font-size: 16px;
  padding: 10px;
  transition: 0.3s;
  background-color: black;
  border-radius: 50%;
  display: ${props => props.small && 'none'};
  :nth-child(2) {
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(1.2);
  }
  @media (max-width: 769px) {
    display: ${props => props.small && 'block'};
    font-size: 12px;
    background: ${props => (props.light ? 'white' : 'black')};
    color: ${props => (props.light ? 'black' : 'white')};
    border: 1px solid rgb(235, 235, 235);
    margin-left: 5px;
    margin-right: 5px;
  }
`;
