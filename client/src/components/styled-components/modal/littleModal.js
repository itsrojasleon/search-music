import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(21, 107, 243);
  padding: 10px;
  position: fixed;
  bottom: 100px;
  right: 10px;
  z-index: 999;
  text-align: center;
  border-radius: 3px;
  color: white;
  animation-name: liked;
  animation-duration: 0.4s;
  @keyframes liked {
    from {
      transform: translateX(200px);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (max-width: 769px) {
    bottom: 0;
    right: 0;
  }
`;
