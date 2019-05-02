import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 18px auto 18px auto;
  @media (max-width: 769px) {
    width: 95%;
  }
`;
const cssIcon = css`
  position: absolute;
  top: 16px;
  right: 10px;
  font-size: 17px;
  color: #ccc;
`;
export const Icon = styled.i`
  ${cssIcon}
`;
export const Spinner = styled.span`
  ${cssIcon}
  content: '';
  box-sizing: border-box;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner 0.6s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  border: 1px solid rgb(240, 240, 240);
  background-color: white;
  padding: 13px 10px;
  border-radius: 5px;
  font-size: 17px;
  text-indent: 10px;
  transition: 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
  &:focus {
    outline: 0;
  }
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(26, 26, 29, 0.08);
  }
`;
export const EmptySearch = styled.div`
  margin-top: 30px;
  font-size: 20px;
  color: rgb(100, 100, 100);
  text-align: center;
`;
