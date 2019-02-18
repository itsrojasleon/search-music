import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 18px auto 18px auto;
`;
export const Icon = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 15px;
  color: #ccc;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: rgb(240, 240, 240);
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 16px;
  text-indent: 10px;
  &:focus {
    outline: 0;
  }
`;
