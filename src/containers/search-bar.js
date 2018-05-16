import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchSongs, emptySearch } from '../actions/songs';
import _ from 'lodash';

import SearchBarComponent from '../components/search-bar-component';

class SearchBar extends Component {
  handleChange = (e) => {
    const term = e.target.value;
    const request = _.debounce(() => { this.props.fetchSongs(term) }, 1000);
    const redirect = _.debounce(() => { this.props.history.push(`/search-music/results/${term}`) }, 1000);
    request();
    redirect();
    if(!term) {
      this.props.emptySearch()
      this.props.history.push('/search-music');
    }
  }
  handleRef = (input) => {
    this.input = input;
  }
  render() {
    const { toggle, theme } = this.props;
    return (
      <div>
        <SearchBarComponent
          onChange={this.handleChange}
          onToggle={toggle}
          theme={theme}
          getRef={this.handleRef}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ toggle, theme }) => ({ toggle, theme });
const mapDispatchToProps = (dispatch) => ({
  fetchSongs: bindActionCreators(fetchSongs, dispatch),
  emptySearch: bindActionCreators(emptySearch, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
