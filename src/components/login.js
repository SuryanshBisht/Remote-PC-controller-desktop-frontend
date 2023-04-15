import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';

import './login.css';

const Login = () => {
	const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    navigation.navigate('/remote', {
		username: 'example',
		password: 'password123',
	  });
  };

  return (
    <div className = 'login-wrapper'>
      <div className = 'heading'>
        Log in
      </div>

      <div className = 'inputView'>
        <label>Username</label>
        <input
          placeholder="Type your username"
          value={username}
          onChange={handleUsernameChange}
        /> 
      </div>

      <div className = 'inputView'>
        <label>Password</label>
        <input
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={handlePasswordChange}
        /> 
      </div>

      <div className='forgotPassword'>Forgot password?</div>

      <button className="loginBtn" onClick={handleLoginClick}>
        Log in
      </button>

    </div>
  );
}

export default Login;
