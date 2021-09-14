const path = require("path")
const express = require("express");
const app = express();
const port = 3000;
const config = require('./client/src/config/config.js');
const axios = require('axios');
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

app.use(express.static(path.join(__dirname, "/client/dist")));

let axiosConfig = {
  headers: {
    'content-type': 'application/json',
    'authorization': config.API_KEY
  }
};

app.get('/*', (req, res) => {
  axios.get(`${API_URL}${req.url}`, axiosConfig)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(`Error making GET request: ${error}`);
  })
 });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});