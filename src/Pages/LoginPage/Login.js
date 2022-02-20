import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';

const Login = () => {
    const { user, handleGoogleSignin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    // Handle google signin
    const googleSignin = () => {
        handleGoogleSignin()
        .then(res => {
                history.push(redirectUrl);
        });
    }

    // Prevent fake user
    if(user.email){
        history.push(redirectUrl);
    }
    return (
        <section>
            <div className="loginPageWrapper">
                  <div className="formArea">
                    <form action="">
                        <input type="email" id="loginFormfiled" placeholder="Email" required/> <br />
                        <input style={{ margin: '0px 0px 10px 0px' }} type="password" id="loginFormfiled" placeholder="Password" required/>
                        <span><input type="checkbox" id="checkboxSavePass" />&nbsp; Remember me</span> <br/>
                        <button style={{margin: '15px 0px 0px 0px', }} className="loginBtn">Login</button>
                    </form>
                    <div className='apiLoginArea'>
                        <div onClick={ googleSignin } className='googleLoginDiv'>Login With Google</div>
                    </div>
                  </div>
            </div>
        </section>
    );
};

export default Login;