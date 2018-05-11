import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/songs';

import SearchBarComponent from '../components/search-bar-component';

class SearchBar extends Component {
  state = {
    term: ''
  };
  handleChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchSongs(this.state.term);
  }
  render() {
    return (
      <SearchBarComponent
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onToggle={this.props.toggle}
      />
    );
  }
}
function mapStateToProps({ songs, toggle }) {
  return {
    songs,
    toggle,
  }
}
export default connect(mapStateToProps, { fetchSongs })(SearchBar);