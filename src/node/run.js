const express = require('express');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 3000;

app.get('/shutdown', (req, res) => {
  const password = req.query.password;
  executeShutdown(password);
  res.send('Shutdown command sent.');
});

app.get('/restart', (req, res) => {
  const password = req.query.password;
  executeRestart(password);
  res.send('Restart command sent.');
});

app.get('/hibernate', (req, res) => {
  const password = req.query.password;
  executeHibernate(password);
  res.send('Hibernate command sent.');
});

function executeShutdown(password) {
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

function executeRestart(password) {
  const cmd = `echo ${password} | sudo -S /sbin/shutdown -r 5`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

function executeHibernate(password) {
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
