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
  }
`;
export const Name = styled.p`
  font-size: 16px;
`;
export const ArtistName = styled.p`
  color: rgb(140, 140, 148);
  font-size: 14px;
  margin-top: 3px;
`;
export const Icons = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
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
