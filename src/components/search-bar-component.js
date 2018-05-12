import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarComponent extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onToggle: PropTypes.bool.isRequired,
    toggleIcon: PropTypes.func.isRequired
  }
  render() {
    const { onChange, onToggle, toggleIcon, getRef } = this.props;
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
        <span>
          <span style={{marginRight: 5}}>View: </span>
          {onToggle === false
            ? <i onClick={toggleIcon} className="fas fa-th"></i>
            : <i onClick={toggleIcon} className="fas fa-list-ul"></i>
          }
        </span>
      </div>
    );
  }
}


export default SearchBarComponent;