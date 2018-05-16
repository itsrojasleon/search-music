import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../actions/theme';

class ButtonView extends React.Component {
  render() {
    const { toggleValue, onToggle, toggleTheme, theme } = this.props;
    return (
      <span className="settings">
        <div>
          <span className="title-view">View: </span>
          {toggleValue === false
            ? <i onClick={onToggle} className="fas fa-th"></i>
            : <i onClick={onToggle} className="fas fa-list-ul"></i>
          }
        </div>
        <div>
          <span className="title-theme">Theme: </span>
          {theme === false
            ? <i onClick={toggleTheme} className="fas fa-sun"></i>
            : <i onClick={toggleTheme} className="fas fa-moon"></i>
          }
        </div>
      </span>
    );
  }
}
const mapStateToProps = ({ theme }) => ({
  theme,
});

export default connect(mapStateToProps, { toggleTheme })(ButtonView);