import React, { Component } from 'react';
import {
  Form,
  Input,
  ButtonSubmit,
  ContainerForm,
  Container
} from '../helpers/styles';

const SearchBar = ({ query, search, showCross, clearSearcher, value }) => {
  console.log(showCross);
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
            <i onClick={query} className="fas fa-search"></i>
          </div>
          {showCross && (
            <i style={{color: '#000'}} className="fas fa-times" onClick={clearSearcher}></i>
          )}
        </Form>
      </ContainerForm>
      <style jsx>{`
        .search-content {
          position: relative;
        }
        .fas.fa-search {
          color: #E0E0E0;
          font-size: 22px;
          position: absolute;
          top: 10px;
          right: 0px;
        }
        .fas.fa-search:hover {
          transition: .3s;
          cursor: pointer;
          color: rgb(221,0,62);
        }
      `}</style>
    </Container>
  )
}
export default SearchBar
