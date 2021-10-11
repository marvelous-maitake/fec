const axios = require('axios');
const path = require('path');
const express = require('express');
const compression = require('compression');
const config = require('./server/config.js');
const runReviewRte = require('./reviews/server/router');

const app = express();
const port = 3000;
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.json());
app.use(compression());

// Axios Requests, format right side URL within client-side request as req.url
const axiosConfig = {
  headers: {
    'content-type': 'application/json',
    authorization: config.API_KEY,
  },
};

app.get('/*', (req, res) => {
  const { url } = req;
  const splitURL = url.split('/').filter((char) => char !== '');
  const firstRoute = splitURL[0];

  console.log(url); // DELETE
  switch (firstRoute) {
    case 'reviews':
      runReviewRte(splitURL, req, res);
      break;
    default:
      res.status(404).send('Error');
  }
});

app.post('/*', (req, res) => {
  const { url } = req;
  const splitURL = url.split('/').filter((char) => char !== '');
  const firstRoute = splitURL[0];

  console.log(url); // DELETE
  switch (firstRoute) {
    case 'reviews':
      runReviewRte(splitURL, req, res);
      break;
    default:
      res.status(404).send('Error');
  }
});

app.put('/*', (req, res) => {
  const { url } = req;
  const splitURL = url.split('/').filter((char) => char !== '');
  const firstRoute = splitURL[0];

  console.log(url); // DELETE
  switch (firstRoute) {
    case 'reviews':
      runReviewRte(splitURL, req, res);
      break;
    default:
      res.status(404).send('Error');
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
