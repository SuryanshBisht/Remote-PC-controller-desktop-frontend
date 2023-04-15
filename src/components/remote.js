 import React from 'react';
 import './remote.css';
import shutdown from '../assets/shutdown.svg';
import restart from '../assets/restart.svg';
import sleep from '../assets/sleep.svg';

const Remote  = () => {
  return (
    <>
    <div className = 'remote-wrapper'>
    <button className = 'remote-btn'>
		<img src = {shutdown} alt = 'image not loaded'/>
	   	<div className = 'label'> Shutdown </div>
	</button>
    <button className = 'remote-btn'>
		<img src = {restart} alt = 'image not loaded'/>
	   	<div className = 'label'> Restart </div>
    </button>
    <button className = 'remote-btn'>
		<img  src = {sleep} alt = 'image not loaded'/>
	   	<div className = 'label'> Sleep</div>
    </button>
    </div>
    </>
  );
}

export default Remote ;
