import React, { Component } from 'react'

const SearchBar = ({ query, search }) => {
  return (
    <div className="columns container-music">
      <div className="column is-8">
        <div className="field">
          <div className="control">
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
      <div className="column container-button">
        <a onClick={this.handleClick} className="button is-danger is-medium">Buscar</a>
      </div>
    </div>
  )
}
export default SearchBar
