import React, { useState } from 'react';
import './LoginPopup.css'; // Assuming this file exists and contains styles
import { assets } from '../../assets/Assets'; // Assuming assets import is necessary
import axios, { HttpStatusCode } from 'axios';
import { URL } from '../../constant/url_config';
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [tos, setTos] = useState(false);

  const authenticationForUser = async (e) => {
    try {
      e.preventDefault();
      if (email.length <= 0 || password.length <= 0 || !tos) return alert('Fill all values')
      const regsisterPath = '/api/user/register';
      const loginPath = '/api/user/login';
      if (currState === 'Login') {
        
        const response = await axios.post(URL.LINK + loginPath, { email: email, password: password });
        if (response.status === HttpStatusCode.Ok) {
          alert('logged in');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user',JSON.stringify(response.data.user));
          window.location.href = '/'
        } else {
          alert(response.data.message ||'User with this email already exists')
        }
      } else {
        const response = await axios.post(URL.LINK + regsisterPath, { email: email, name: name, password: password });
        if (response.status === HttpStatusCode.Ok) {
          alert('registered in');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          window.location.href = '/'
        } else {
          alert(response.data.message || 'invalid password. Try again later')
        }
      }
    } catch (e) {
      alert('some error occurred try again later')
    }
  }




  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Your Name' required />}
          <input type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} value={email} required />
          <input type="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button onClick={authenticationForUser} type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input onChange={(e) => setTos(e.target.checked)} value={tos} type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
