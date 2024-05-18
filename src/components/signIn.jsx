import React, {useState} from 'react';
import styles from './styles/authentication.module.css';
import { Link, useNavigate } from 'react-router-dom';
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'projectID': 'qo3cfe3k85m3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        "appType": "music"
      })
    });


    const data = await response.json();
    const handleResponse = (data) => {
      console.log(data);
      if(data.status === 'success'){alert(`Welcome to SoundCloud ${data.data.user.name}`)}
      else{alert('Please Check Your Credentials')};
      console.log("I Got The Data");
      if (response.ok) { // check if the request was successful
        navigate('/'); // navigate to home page
      } else {
        // handle error
        console.error(data);
      }
    };
    handleResponse(data);
  };
  
  return (
    <div className={styles.container}>
      <form className={styles.SignInform} onSubmit={handleSubmit}>
        <h1 className={styles.headingSignIn}>Sign In</h1>
        <input type="email" placeholder="Email address" className={styles.inputSignUp} required onChange={e => setEmail(e.target.value)}></input>
        <br></br>
        <input type="password" placeholder="Password" className={styles.inputSignUp} required onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <button className={styles.continueSignInButton}>Continue</button>
        <p className={styles.alreadyAccount}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default SignIn;