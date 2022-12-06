import React, {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Login = ({googleSignin, manualyLogin, loadingGif}) => {
    // Take some state for storing login form data here
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    // Handle manualy login here
    const handleManualyLogin = (e) => {
        // Pass form data into the manually function here
        manualyLogin(userEmail, userPass);

        // Prevent default form loading behaviour
        e.preventDefault();
    };
    return (
        <section>
            <div className="loginPageWrapper">
                  <div className="formArea">
                    <form onSubmit={handleManualyLogin}>
                        <input type="email" id="loginFormfiled" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} required/> <br />
                        <input style={{ margin: '0px 0px 10px 0px' }} type="password" id="loginFormfiled" placeholder="Password" onChange={(e) => setUserPass(e.target.value)} required/>
                        <span><input type="checkbox" id="checkboxSavePass" />&nbsp; Remember me</span> <br/>
                        <button type="submit" style={{margin: '15px 0px 0px 0px', }} className="loginBtn">{loadingGif ? <CircularProgress size={18} /> : "Login"}</button>
                        
                    </form>
                    <div className='apiLoginArea'>
                        <div onClick={ googleSignin } className='googleLoginDiv'> Login With Google</div>
                    </div>
                  </div>
            </div>
        </section>
    );
};

export default Login;