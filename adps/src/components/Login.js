import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect,setRedirect] = useState(false);
  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:9000/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if(response.ok) {
         setRedirect(true)}
     else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/main'} />
  }
  return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="loginForm">
          <div id="formTitle">Sign in </div>
          <div>
            <form onSubmit={login}>
              <div className="inputBox">
                <label>Email</label>
                <input type="text" name="username" value={email}
           onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="inputBox">
                <label>Password</label>

                <input type="password" name="password" value={password}
           onChange={e => setPassword(e.target.value)}/>
              </div>
              <button className="LoginBtn" >Login</button>
            </form>
          </div>
        </div>
        <div id="welcome">
          <p>
            Welcome to the Login Page
            
          </p>
          <h6>Don't Have an Account ? </h6>
          <a className="button-18" href="/signup">sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
