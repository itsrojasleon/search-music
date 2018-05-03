import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

class SearchBar extends React.Component {
  state = {
    show: false,
    toggle: false,
  };
  static propTypes = {
    value: PropTypes.string || PropTypes.number,
    showCross: PropTypes.bool
  };
  onToggle = () => {
    this.setState(() => ({
      toggle: !this.state.toggle,
    }))
  }
  render() {
    const { query, search, showCross, clearSearcher, value } = this.props;
    return (
      <Container>
        <ContainerForm>
          <form onSubmit={query} className="container-search-bar">
            <SearchContent className="search-content">
              <Input
                type="text"
                placeholder="Search your favorite song"
                onChange={search}
                value={value}
              />
              {showCross
                ? <i className="fas fa-times" onClick={clearSearcher}></i>
                : <i onClick={query} className="fas fa-search"></i>
              }
            </SearchContent>
          </form>
          <Icons>
            <span style={{marginRight: 5}}>View: </span>
            {this.state.toggle
              ? <i onClick={this.onToggle} className="fas fa-th"></i>
              : <i onClick={this.onToggle} className="fas fa-list-ul"></i>
            }
          </Icons>
        </ContainerForm>
        <style jsx>{`
          .fas.fa-th, .fas.fa-list-ul {
            font-size: 25px;
            color: #E0E0E0;
            transition: .3s;
          }
          .fas.fa-th:hover, .fas.fa-list-ul:hover {
            color: rgb(222,0,62);
            cursor: pointer;
          }
          .fas.fa-list-ul:active, .fas.fa-th:active{
            transform: scale(1.3);
          }
          .fas.fa-search, .fas.fa-times {
            color: #E0E0E0;
            font-size: 22px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
          .fas.fa-search:hover, .fas.fa-times:hover {
            transition: .3s;
            cursor: pointer;
            color: rgb(221,0,62);
          }
        `}</style>
      </Container>
    );
  }
}
export default SearchBar
