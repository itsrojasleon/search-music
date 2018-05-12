import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Container = styled.div`
//   background: #ffffff;
//   padding: 20px;
//   border-bottom: 1px solid #EEEEEE;
// `;
// const SearchContent = styled.div`
//   position: relative;
//   width: 50%;
//   margin: auto;
//   @media(max-width: 769px) {
//     width: 80%;
//   }
//   @media(max-width: 620px) {
//     width: 100%;
//   }
// `;
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
// const Input = styled.input`
//   width: 100%;
//   padding: 12px 10px;
//   font-size: 18px;
//   border-radius: 20px;
//   border: 1px solid #E0E0E0;
//   text-indent: 10px;
//   transition: .3s;
//   box-sizing: border-box;
//   &:focus {
//     outline: none;
//     border: 1px solid rgb(222,0,62);
//   }
//   &::selection {
//     color: #ffffff;
//     background: rgb(222,0,62);
//   }
//   @media(max-width: 767px) {
//     font-size: 18px;
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
// const ToggleIcon = styled.i`
//   color: #E0E0E0;
//   font-size: 22px;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   &:hover {
//     transition: .3s;
//     cursor: pointer;
//     color: rgb(221,0,62);
//   }
// `;
// const ViewIcon = styled.i`
//   font-size: 25px;
//   color: #E0E0E0;
//   transition: .3s;
//   &:hover {
//     color: rgb(222,0,62);
//     cursor: pointer;
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
      <div>
        <div>
          <input
            type="text"
            onChange={onChange}
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