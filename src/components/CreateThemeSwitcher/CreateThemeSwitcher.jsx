import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './CreateThemeSwitcher.module.css';

export class CreateThemeSwitcher extends Component {
  static propTypes = {
    handleToggleTheme: PropTypes.func.isRequired,
    modeTheme: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className={style.switchBox}>
        {/* <span className={style.themeName}>Night</span> */}
        <label className={style.switch}>
          <input
            type="checkbox"
            onChange={this.props.handleToggleTheme}
            checked={!this.props.modeTheme}
          />
          <span className={style.slider}></span>
        </label>
        {/* <span className={style.themeName}>Day</span> */}
      </div>
    );
  }
}
