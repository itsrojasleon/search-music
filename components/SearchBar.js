import React, { Component } from 'react'
import { Search } from '../helpers/styles'

const SearchBar = ({ query, search }) => {
  return (
    <div>
      <div>
        <div>
          <Search>
            <form onSubmit={query} className="container-search-bar">
              <input
                className="input is-danger is-medium"
                type="text"
                placeholder="Busca tu canción favorita"
                onChange={search}
              />
            </form>
          </Search>
        </div>
      </div>
      <div>
        <a onClick={query} className="button is-danger is-medium">Buscar</a>
      </div>
    </div>
  )
}
export default SearchBar
