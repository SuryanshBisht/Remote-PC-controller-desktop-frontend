import React from 'react';

import './login.css';

const Login = () => {
  return (
    <div className = 'login-wrapper'>
	    <div className = 'heading'>
	    Log in
	    </div>

	     <div className = 'inputView'>
	      <label>Username</label>
	        <input
	          placeholder="Type your username"
	        /> 
	      </div>

	     <div className = 'inputView'>
	      <label>Password</label>
	        <input
	          placeholder="Type your password"
	        /> 
	      </div>

	      
	     <div className='forgotPassword'>Forgot password?</div>


	    <button className = "loginBtn">
	    Log in
	    </button>

    </div>
  );
}

export default Login;
