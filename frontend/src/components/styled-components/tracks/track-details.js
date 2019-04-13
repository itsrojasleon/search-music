import styled from 'styled-components';

export const Container = styled.span`
  @media(max-width: 769px) {
    display: flex;
    flex-direction: row;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 5px;
    margin-bottom: 10px;
    align-items: center;
  }
`;
export const ImageContainer = styled.picture`
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  transition: 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
  @media(max-width: 769px) {
    width: 20%;
    padding: 10px;
    border-radius: 10px;
  }
`;
export const Data = styled.span`
  @media(max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Name = styled.p`
  font-size: 18px;
`;
export const ArtistName = styled.p`
  color: rgb(140, 140, 148);
  font-size: 16px;
  margin-top: 3px;
`;
export const Icons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px;
  
  width: 100px;
  text-align: center;
  @media(max-width: 769px) {
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
  :nth-child(2) {
    margin-left: 10px;
  }
`;
