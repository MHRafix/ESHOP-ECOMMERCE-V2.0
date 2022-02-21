import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Register({createAccount, loadingGif2}) {
  // Take some state for storing form data
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  // Handle registration form submit here
  const handleRegistrationFormSubmit = (e) => {
    // Pass data into createAccount function
    createAccount(userEmail, userPass, userName);

    // Prevent default behaviour loading
    e.preventDefault();
  }
  return (
    <section>
        <div className="loginPageWrapper">
          <div className="formArea">
            <form onSubmit={handleRegistrationFormSubmit}>
                <input type="text" id="loginFormfiled" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required/> <br />
                <input type="email" id="loginFormfiled" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} required/> <br />
                <input type="password" id="loginFormfiled" placeholder="Password" onChange={(e) => setUserPass(e.target.value)} required/> <br />
                <button type="submit" className="loginBtn">{loadingGif2 ? <CircularProgress size={18} /> : "Register"}</button>
            </form>
          </div>
        </div>
    </section>
  )
}
