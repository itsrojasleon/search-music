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
    this.props.history.push(`/search/results/${term}`);
    this.props.fetchSongs(term);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;
  }
  render() {
    console.log("Songs: ", this.props.songs)
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
const mapStateToProps = ({ toggle, songs }) => ({ toggle, songs });

export default withRouter(connect(mapStateToProps, { fetchSongs, toggleIcon })(SearchBar));
