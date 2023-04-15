import React from 'react';
import './menu.css';
import user_icon from '../assets/user_icon.svg';
import logout from '../assets/logout.svg';
import devices from '../assets/devices.svg';

const Menu = () => {
  return (
    <div className = 'menu-wrapper'>
		<button className = 'item'>
		<img src = {user_icon} alt = 'image not loaded'/>
	   	<div className = 'label'> User </div>
	    </button>
	    <button className = 'item'>
		<img src = {devices} alt = 'image not loaded'/>
	   	<div className = 'label'> Devices </div>
	    </button>
	    <button className = 'item'>
		<img  src = {logout} alt = 'image not loaded'/>
	   	<div className = 'label'> Log out</div>
	    </button>
    </div>
  );
}

export default Menu;
