import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import useAuth from '../../CustomHooks/useAuth';
import { Alert, Snackbar } from '@mui/material';

export default function LoginRegisterMain() {
    // Take some state for controlling login area and register area
    const [loginArea, setLoginArea] = useState(true);
    const [registerArea, setRegisterArea] = useState(false);
    const { user, err, setErr, openAlert, setOpenAlert, loading, handleManualyCreateAccount, handleManualyLogin, handleGoogleSignin } = useAuth();

    // Take some dependency for redirect the user to the espected page
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    // Handle google signin
    const googleSignin = () => {
        handleGoogleSignin()
        .then(res => {
            history.push(redirectUrl);
            setOpenAlert(false);
            setErr('');
        }).catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        setErr(errorCode, ":", errorMessage);
        setOpenAlert(true);
      });
    }

    // Prevent fake user
    if(user.email){
        history.push(redirectUrl);
    }
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
        </div> 
        <br />
            {openAlert && <Alert severity="error" sx={{ margin: 'auto', width: '48%', fontFamily: 'Poppins', fontSize: '15' }}>
            {err}!
            </Alert>}
        <br />
        <div className="formAccountsCreatingArea">
            {loginArea && <Login loadingGif={loading} googleSignin={googleSignin} manualyLogin={handleManualyLogin} />}
            {registerArea && <Register loadingGif2={loading} createAccount={handleManualyCreateAccount} />}
        </div> <br/><br/>
    </section>
  )
}
