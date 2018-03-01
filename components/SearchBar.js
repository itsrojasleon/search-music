import React, { Component } from 'react'

const SearchBar = ({ query, search }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <form onSubmit={query} className="container-search-bar">
              <input
                className="input is-danger is-medium"
                type="text"
                placeholder="Busca tu canción favorita"
                onChange={search}
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <a onClick={query} className="button is-danger is-medium">Buscar</a>
      </div>
    </div>
  )
}
export default SearchBar
