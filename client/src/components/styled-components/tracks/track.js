import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 196px);
  grid-gap: 40px;
  margin-bottom: 120px;
  @media (max-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
`;
export const Box = styled.div`
  background-color: ${props => (props.isSelected ? '#ccc' : '')};
`;
