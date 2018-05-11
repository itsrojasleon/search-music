import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/songs';
import { toggleIcon } from '../actions/toggle';
import { withRouter } from 'react-router-dom';

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
    console.log(this.props);
    return (
      <SearchBarComponent
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onToggle={this.props.toggle}
        toggleIcon={this.props.toggleIcon}
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
export default withRouter(connect(mapStateToProps, { fetchSongs, toggleIcon })(SearchBar));