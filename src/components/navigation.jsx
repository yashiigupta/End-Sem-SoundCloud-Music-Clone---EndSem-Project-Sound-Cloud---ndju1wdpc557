import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import Styles from './styles/navigation.module.css'
import logo from './assets/soundCloud-logo.png'

function NavigationBar() {
  return (
    <div className={Styles.navigation}>
      <div>
        <Link to="/">
          <img src={logo} alt='brand-logo' style={{height: '25px', display: 'inline'}}></img>
        </Link>
        <span className={Styles.brandName}>SOUNDCLOUD</span>
      </div>
      <Link to="/signin">
        <button className={Styles.signIn}>Sign In</button>
      </Link>
    </div>
  );
}

export default NavigationBar;
