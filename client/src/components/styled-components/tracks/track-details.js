import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
    transform: scale(1.3);
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
  width: 100%;
  top: 0;
  bottom: 0;
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
  background-color: black;
  border-radius: 50%;
  :nth-child(2) {
    margin-left: 10px;
  }
`;
