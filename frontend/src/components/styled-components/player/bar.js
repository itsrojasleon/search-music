import styled from 'styled-components';

export const Container = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const BarTime = styled.span`
  color: black;
  font-size: 16px;
  width: 50px;
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
  border: 1px solid white;
  border-radius: 50%;
  background-color: black;
`;
