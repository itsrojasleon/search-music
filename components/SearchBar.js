import React, { Component } from 'react'
import {
  Form,
  Input,
  ButtonSubmit
} from '../helpers/styles'

const SearchBar = ({ query, search }) => {
  return (
    <Form onSubmit={query} className="container-search-bar">
      <Input
        className="input is-danger is-medium"
        type="text"
        placeholder="Busca tu canción favorita"
        onChange={search}
      />
      <ButtonSubmit onClick={query}>Buscar</ButtonSubmit>
    </Form>
  )
}
export default SearchBar
