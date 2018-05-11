import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchContent = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  @media(max-width: 769px) {
    width: 80%;
  }
  @media(max-width: 620px) {
    width: 100%;
  }
`;
const ContainerForm = styled.div`
  width: 100%;
  text-align: center;
  transition: .3s;
  @media (max-width: 769px) {
    width: 80%;
  }
  @media(max-width: 620px) {
    width: 100%;
  }
`;
const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-bottom: 1px solid #EEEEEE;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  font-size: 18px;
  border-radius: 20px;
  border: 1px solid #E0E0E0;
  text-indent: 10px;
  transition: .3s;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 1px solid rgb(222,0,62);
  }
  &::selection {
    color: #ffffff;
    background: rgb(222,0,62);
  }
  @media(max-width: 767px) {
    font-size: 18px;
  }
`;
const Icons = styled.span`
  width: 100%;
  text-align:right;
  display: block;
  @media(max-width: 769px) {
    text-align: center;
  }
`;

const SearchBarComponent = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
      />
    </form>
  );
}
SearchBarComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default SearchBarComponent;