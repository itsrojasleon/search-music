import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;
`;
export const InputRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 40%;
  height: 10px;
  background: white;
  outline: none;
  border: 1px solid rgb(220,220,220);
  opacity: .9;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: grab;
  justify-self: center;
  &:hover {
    input-range:hover;
    opacity: 1;
  }
  &::-webkit-slider-runnable-track {
    background-color: rgb(230,230,230);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    transition: 0.2s;
  }
  &:::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: primary;
    cursor: grab;
    border-radius: 50%;
    background: red;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: primary;
    cursor: grab;
    border-radius: 50%;
  }
`;
