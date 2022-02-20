import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

export default function LoginRegisterMain() {
    // Take some state for controlling login area and register area
    const [loginArea, setLoginArea] = useState(true);
    const [registerArea, setRegisterArea] = useState(false);
  return (
    <section>
        <div className="loginRegisterToggleBtn">
            <button id={loginArea ? "activeArea" : "deactiveArea"} className='loginTogglerBtn' onClick={ () => {
                setRegisterArea(false);
                setLoginArea(true);
            }}>Login</button>
            <button id={registerArea ? "activeArea" : "deactiveArea"} className='registerTogglerBtn' onClick={ () => {
                setLoginArea(false);
                setRegisterArea(true);
            }}>Register</button>
        </div> <br /><br />

        <div className="formAccountsCreatingArea">
            {loginArea && <Login />}
            {registerArea && <Register />}
        </div> <br/><br/>
    </section>
  )
}
