import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarComponent extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onToggle: PropTypes.bool.isRequired,
  }
  render() {
    const { onChange, getRef } = this.props;
    return (
      <div className="search-bar-container">
        <div className="search-container">
          <input
            type="text"
            onChange={onChange}
            className="input"
            ref={getRef}
          />
          <i className="fas fa-search"></i>
          {/*<i className="fas fa-times"></i>*/}
        </div>
      </div>
    );
  }
}


export default SearchBarComponent;