import React from 'react';
import './remote.css';
import shutdown from '../assets/shutdown.svg';
import restart from '../assets/restart.svg';
import sleep from '../assets/sleep.svg';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Remote = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const password = searchParams.get('password');

  const handleShutdown = () => {
    axios.get(`http://localhost:3000/shutdown?password=${password}`)
      .then(response => {
        console.log(response.data);
        console.log(password)
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRestart = () => {
    axios.get(`http://localhost:3000/restart?password=${password}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleHibernate = () => {
    axios.get(`http://localhost:3000/hibernate?password=${password}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <div className='remote-wrapper'>
        <button className='remote-btn' onClick={handleShutdown}>
          <img src={shutdown} alt='image not loaded' />
          <div className='label'> Shutdown </div>
        </button>
        <button className='remote-btn' onClick={handleRestart}>
          <img src={restart} alt='image not loaded' />
          <div className='label'> Restart </div>
        </button>
        <button className='remote-btn' onClick={handleHibernate}>
          <img src={sleep} alt='image not loaded' />
          <div className='label'> Sleep</div>
        </button>
      </div>
    </>
  );
}

export default Remote;
