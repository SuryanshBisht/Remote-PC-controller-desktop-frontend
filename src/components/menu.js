import React from 'react';
import './menu.css';
import user_icon from '../assets/user_icon.svg';
import logout from '../assets/logout.svg';
import devices from '../assets/devices.svg';
import { useNavigation } from "react-router-dom";

const Menu = () => {
	const navigate = useNavigation();
    const handleUser = () => {
        navigate("/");
    };
	const handleDevices = () => {
        navigate("/devices");
    };
	const handleLogin = () => {
        navigate("/login");
    };
  return (
    <div className = 'menu-wrapper'>
		<button className = 'item' onClick={handleUser}>
		<img src = {user_icon} alt = 'image not loaded'/>
	   	<div className = 'label'>User</div>
	    </button>
	    <button className = 'item' onClick={handleDevices}>
		<img src = {devices} alt = 'image not loaded'/>
	   	<div className = 'label'> Devices</div>
	    </button>
	    <button className = 'item' onClick={handleLogin}>
		<img  src = {logout} alt = 'image not loaded'/>
	   	<div className = 'label'>Log in</div>
	    </button>
    </div>
  );
}

export default Menu;
