import React, { Component } from 'react';
import trackService from '../services/track';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      tracks: [],
      loading: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  onSearchData() {
    this.props.onSearch(this.state.tracks);
  }

  handleClick(e) {
    e.preventDefault();
    if(!this.state.searchQuery) {
      return null;
    }

    this.setState({
      loading: true,
    })

    trackService.search(this.state.searchQuery)
      .then(response => {
        this.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length,
        })
      });
  }


  render() {
    return (
      <div className="column is-8">
        <div className="field">
          <div className="control">
            <form onSubmit={this.handleClick} className="container-search-bar">
              <input
                className="input is-danger is-medium"
                type="text"
                placeholder="Busca tu canción favorita"
                onChange={this.handleSearch}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
