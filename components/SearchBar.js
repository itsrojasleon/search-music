import React, { Component } from 'react'
import {
  Form,
  Input,
  ButtonSubmit,
  SearcherContainer,
  ContainerForm
} from '../helpers/styles'
import Searcher from '../svgs/search.svg'

const SearchBar = ({ query, search }) => {
  return (
    <ContainerForm>
      <Form onSubmit={query} className="container-search-bar">
        <Input
          className="input is-danger is-medium"
          type="text"
          placeholder="Busca tu canción favorita"
          onChange={search}
        />
        <ButtonSubmit onClick={query}>
          <SearcherContainer>
            <Searcher />
          </SearcherContainer>
        </ButtonSubmit>
      </Form>
    </ContainerForm>
  )
}
export default SearchBar
