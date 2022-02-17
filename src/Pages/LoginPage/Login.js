import React from 'react';

const Login = () => {
    return (
        <section>
            <div className="loginPageWrapper">
                  <div className="formArea">
                     <h2 className="formTitle">Admin Login</h2>
                    <form action="">
                        <input type="email" id="loginFormfiled" placeholder="Email" /> <br />
                        <input type="password" id="loginFormfiled" placeholder="Password" /> <br />
                        <button className="loginBtn">Login</button>
                    </form>
                  </div>
            </div>
        </section>
    );
};

export default Login;