import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchSongs, emptySearch } from '../actions/songs';

import SearchBarComponent from '../components/search-bar-component';

class SearchBar extends Component {
  componentDidMount() {
    this.props.fetchSongs(this.input.defaultValue, () => this.props.history.push(`/search/results/${this.input.defaultValue}`) );
  }
  handleChange = (e) => {
    const term = e.target.value;
    if(!term) this.props.emptySearch();
    this.props.fetchSongs(term, () => this.props.history.push(`/search/results/${term}`) );

  }
  handleRef = (input) => {
    this.input = input;
  }
  render() {
    return (
      <div>
        <SearchBarComponent
          onChange={this.handleChange}
          onToggle={this.props.toggle}
          getRef={this.handleRef}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ toggle }) => ({ toggle });
const mapDispatchToProps = (dispatch) => ({
  fetchSongs: bindActionCreators(fetchSongs, dispatch),
  emptySearch: bindActionCreators(emptySearch, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
