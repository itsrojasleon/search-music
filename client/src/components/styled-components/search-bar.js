import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 18px auto 18px auto;
`;
export const Icon = styled.i`
  position: absolute;
  top: 16px;
  right: 10px;
  font-size: 17px;
  color: #ccc;
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
