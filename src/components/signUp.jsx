import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/authentication.module.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var count = 0;
    var countSpecial = 0;
    for(let c of name) {
      if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
      {
        count++;
      }
      else if(c !== ' ')
      {
        countSpecial++;
      }
    }
    if(count < 3) {
      alert('Name must contain atleast 3 alphabetical characters');
      return;
    }

    if(countSpecial >= 1) {
      alert('Name must not have any special characters except a space');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Email must contain "@"');
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}/.test(password)) {
      alert('Password should be at least 6 characters long and include lower and uppercase letters and symbols');
      return;
    }
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'projectID': 'qo3cfe3k85m3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        appType: 'music'
      })
    });
    const data = await response.json();
    console.log(data);
    if(data.status === 'fail') alert(`${data.message}`);
    else navigate('/signin');
  };
  return (
    <div className={styles.container}>
      <form className={styles.SignUpform} onSubmit={handleSubmit}>
        <h1 className={styles.headingSignUp}>Create a new account</h1>
        <input type="text" placeholder="Full name" className={styles.inputSignUp} required onChange={e => setName(e.target.value)}></input>
        <br></br>
        <input type="email" placeholder="Email address" className={styles.inputSignUp} required onChange={e => setEmail(e.target.value)}></input>
        <br></br>
        <input type="password" placeholder="Password" className={styles.inputSignUp} required onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <button className={styles.continueSignUpButton}>Continue</button>
        <p className={styles.alreadyAccount}>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  )
}

export default SignUp;