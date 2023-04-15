const { exec, spawn } = require('child_process');
const path = require('path');

function shutdown(username, password) {
    console.log(password)
    const cmd = `echo ${password} | sudo -S /sbin/shutdown -h now`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
  function executeRestart(username, password) {
    const cmd = `echo ${password} | sudo -S /sbin/shutdown -r now`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }

  function executeHibernate(username, password) {
    const cmd = `echo ${password} | sudo -S systemctl hibernate`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  }
  

shutdown('sp', 'dpsingh05');
