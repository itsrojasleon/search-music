import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const ContainerForm = styled.div`
//   width: 100%;
//   text-align: center;
//   transition: .3s;
//   @media (max-width: 769px) {
//     width: 80%;
//   }
//   @media(max-width: 620px) {
//     width: 100%;
//   }
// `;
// const Icons = styled.span`
//   width: 100%;
//   text-align:right;
//   display: block;
//   @media(max-width: 769px) {
//     text-align: center;
//   }
// `;

class SearchBarComponent extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onToggle: PropTypes.bool.isRequired,
    toggleIcon: PropTypes.func.isRequired
  }
  render() {
    const { onChange, onToggle, toggleIcon } = this.props;
    return (
      <div className="search-bar-container">
        <div className="search-container">
          <input
            type="text"
            onChange={onChange}
            className="input"
          />
          {onToggle
            ? <i className="fas fa-times"></i>
            : <i className="fas fa-search"></i>
          }
        </div>
        <span>
          <span style={{marginRight: 5}}>View: </span>
          ? <i onClick={toggleIcon} className="fas fa-th"></i>
          : <i onClick={toggleIcon} className="fas fa-list-ul"></i>
        </span>
      </div>
    );
  }
}


export default SearchBarComponent;