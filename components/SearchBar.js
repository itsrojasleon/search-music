import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  ButtonSubmit,
  ContainerForm,
  Container
} from '../helpers/styles';
class SearchBar extends React.Component {
  state = {
    show: false
  };
  static propTypes = {
    value: PropTypes.string || PropTypes.number,
    showCross: PropTypes.bool
  };
  render() {
    const { query, search, showCross, clearSearcher, value } = this.props;
    return (
      <Container>
        <ContainerForm>
          <Form onSubmit={query} className="container-search-bar">
            <div className="search-content">
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
            </div>
          </Form>
        </ContainerForm>
        <style jsx>{`
          .search-content {
            position: relative;
          }
          .fas.fa-search, .fas.fa-times {
            color: #E0E0E0;
            font-size: 22px;
            position: absolute;
            top: 10px;
            right: 0px;
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
