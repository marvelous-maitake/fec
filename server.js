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
  const id = splitURL[1];

  switch (id) {
    case 'reviews':
      runReviewRte(url, req, res);
      break;
    default:
      res.status(404).send('Error');
  }

//  axios.get(`${API_URL}${req.url}`, axiosConfig)
//   .then((response) => {
//     res.send(response.data);
//   })
//   .catch((error) => {
//     res.sendFile(__dirname + '/client/dist/404page.html');
//   })
});

app.post('/*', (req, res) => {
  axios.post(`${API_URL}${req.url}`, req.body, axiosConfig)
    .then((response) => {
      res.send(response.status);
    })
    .catch((error) => {
      res.send(`Error making POST request: ${error}`);
    });
});

app.put('/*', (req, res) => {
  axios.put(`${API_URL}${req.url}`, {}, axiosConfig)
    .then((response) => {
      res.send(response.status);
    })
    .catch((error) => {
      res.send(`Error making PUT request: ${error}`);
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
