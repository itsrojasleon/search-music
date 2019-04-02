import styled from 'styled-components';

export const Container = styled.div``;
export const ImageContainer = styled.div`
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
  margin-top: -14px;
  margin-left: -50px;
  width: 100px;
  text-align: center;
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
