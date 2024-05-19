import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import Styles from './styles/navigation.module.css'
import logo from './assets/soundCloud-logo.png'

function NavigationBar(props) {
  const navigate = useNavigate();
  const handleSignIN = () => {
    if (props.isLoggedin) {
      props.setLoggedin(false);
      props.setUsername("");
      props.setTokken(null);
      alert('You have been sucessfully signed out');
      navigate('/');
    }else{
      navigate('/signin')
    }
  }
  return (
    <div className={Styles.navigation}>
      <div>
        <Link to="/">
          <img src={logo} alt='brand-logo' style={{height: '25px', display: 'inline'}}></img>
        </Link>
        <span className={Styles.brandName}>SOUNDCLOUD</span>
      </div>
      <button onClick = {handleSignIN} className={Styles.signIn}>{props.isLoggedin ? "Sign Out" : "Sign In"}</button>
    </div>
  );
}

export default NavigationBar;
