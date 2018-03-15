import React, { Component } from 'react'
import {
  Form,
  Input,
  ButtonSubmit,
  SearcherContainer,
  ContainerForm,
  Container
} from '../helpers/styles'
import Searcher from '../svgs/search.svg'
import Cross from '../svgs/cross.svg'

const SearchBar = ({ query, search, showCross, clearSearcher, value }) => {
  return (
    <Container>
      <ContainerForm>
        <Form onSubmit={query} className="container-search-bar">
          <Input
            className="input is-danger is-medium"
            type="text"
            placeholder="Search your favorite song"
            onChange={search}
            value={value}
          />
          <ButtonSubmit onClick={query} >
            <SearcherContainer>
              <Searcher />
            </SearcherContainer>
          </ButtonSubmit>
          {showCross && (
            <ButtonSubmit onClick={clearSearcher} >
              <SearcherContainer>
                <Cross />
              </SearcherContainer>
            </ButtonSubmit>
          )}
        </Form>
      </ContainerForm>
    </Container>
  )
}
export default SearchBar
