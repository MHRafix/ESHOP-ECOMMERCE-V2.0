import React from 'react'

export default function Register() {
  return (
    <section>
        <div className="loginPageWrapper">
          <div className="formArea">
            <form action="">
                <input type="text" id="loginFormfiled" placeholder="Username" required/> <br />
                <input type="email" id="loginFormfiled" placeholder="Email" required/> <br />
                <input type="password" id="loginFormfiled" placeholder="Password" required/> <br />
                <button className="loginBtn">Register</button>
            </form>
          </div>
        </div>
    </section>
  )
}
