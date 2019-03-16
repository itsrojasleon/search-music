import styled from 'styled-components';

export const Container = styled.div`
  text-align: right;
  user-select: none;
  width: 80%;
  display: flex;
  align-items: center;
`;
export const BarProgress = styled.div`
  flex: 1;
  border-radius: 5px;
  margin: 0 20px;
  height: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border: 1px solid rgb(245, 245, 245);
`;
export const BarProgressKnob = styled.span`
  position: relative;
  height: 15px;
  width: 15px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 50%;
  background-color: rgb(240, 240, 240);
`;
