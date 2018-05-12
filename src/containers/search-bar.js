import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs, emptySearch } from '../actions/songs';
import { toggleIcon } from '../actions/toggle';
import { withRouter } from 'react-router-dom';

import SearchBarComponent from '../components/search-bar-component';

class SearchBar extends Component {
  state = {
    term: ''
  };
  handleChange = (e) => {
    const term = e.target.value;
    if(!term) {
      this.props.emptySearch();
    }
    this.setState({ term });
    this.props.fetchSongs(term, () => this.props.history.push(`/search/results/${term}`) );
  }
  render() {
    return (
      <div>
        <SearchBarComponent
          onChange={this.handleChange}
          onToggle={this.props.toggle}
          toggleIcon={this.props.toggleIcon}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ toggle }) => ({ toggle });

export default withRouter(connect(mapStateToProps, { fetchSongs, toggleIcon, emptySearch })(SearchBar));
