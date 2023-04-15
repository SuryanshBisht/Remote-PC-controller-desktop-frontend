import React from 'react';
import './devices.css';
import mobile from '../assets/mobile.svg';

const Devices  = () => {
  const devices = ['device 1', '2 device', '3 device'];

  return (
    <>
    <div className = 'devices-wrapper'>
     <div className = 'device-heading'>
      Devices
      </div>

      <div className = 'sub-heading'>
      Connected to
      <div className = 'device-list'>
      {
        devices.map( (item) => {
          return(
            <div className = 'device'> 
            <img  src = {mobile} alt = 'image not loaded'/>
            <div className = 'label'>{item}</div>
            </div>
          )
        })
      }
      </div>
      </div>
    
    </div>
    </>
  );
}

export default Devices ;
