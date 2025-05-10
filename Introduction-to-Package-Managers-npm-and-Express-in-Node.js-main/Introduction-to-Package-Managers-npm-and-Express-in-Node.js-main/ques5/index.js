
const express = require('express');
const os = require('os');
const dns = require('dns');
const { readFileContent } = require('./read');  

const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send('Test route is working!');
});


app.get('/readfile', async (req, res) => {
  try {
    const data = await readFileContent();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/systemdetails', (req, res) => {
  const systemDetails = {
    platform: os.platform(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,  
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,    
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length 
  };
  res.json(systemDetails);
});
app.get('/getip', (req, res) => {
  dns.lookup('masaischool.com', (err, address, family) => {
    if (err) {
      res.status(500).send('Error fetching IP address.');
    } else {
      res.json({
        hostname: 'masaischool.com',
        ipAddress: address
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
