import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

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
    this.props.fetchPosts(this.state.term);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
function mapStateToProps({ songs }) {
  return {
    songs,
  }
}
export default connect(mapStateToProps, { fetchPosts })(SearchBar);