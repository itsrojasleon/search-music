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
            type="text"
            placeholder="Search your favorite song"
            onChange={search}
            value={value}
          />
          <SearcherContainer>
            <Searcher onClick={search} />
            {showCross && (
              <Cross onClick={clearSearcher} />
            )}
          </SearcherContainer>

        </Form>
      </ContainerForm>
    </Container>
  )
}
export default SearchBar
