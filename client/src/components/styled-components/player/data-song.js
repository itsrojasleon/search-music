import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 35px;
  border-radius: 8px;
  @media (max-width: 769px) {
    width: 90%;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const Name = styled.p`
  font-size: 15px;
`;
export const Artist = styled.p`
  font-size: 15px;
  color: rgb(140, 140, 148);
  font-size: 14px;
`;
