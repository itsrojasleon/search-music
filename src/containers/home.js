import React, { Component } from 'react';
import { connect } from 'react-redux';
import lightWeb from '../utils/light-web.png';
import lightMobile from '../utils/light-mobile.png';
// import DarkWeb from '../utils/dark-web.png';
// import DarkMobile from '../utils/dark-mobile.png';

class Home extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="home">
        <h1 style={{ color: theme === false ? 'black' : 'white' }} className="title">Search Music</h1>
        <div className="image-container">
          <img className="light-web" src={lightWeb} />
          <img className="light-mobile" src={lightMobile} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ theme }) => ({
  theme,
});
export default connect(mapStateToProps)(Home);