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

const SearchBar = ({ query, search }) => {
  return (
    <Container>
      <ContainerForm>
        <Form onSubmit={query} className="container-search-bar">
          <Input
            className="input is-danger is-medium"
            type="text"
            placeholder="Search your favorite song"
            onChange={search}
          />
          <ButtonSubmit onClick={query}>
            <SearcherContainer>
              <Searcher />
            </SearcherContainer>
          </ButtonSubmit>
        </Form>
      </ContainerForm>
    </Container>
  )
}
export default SearchBar
