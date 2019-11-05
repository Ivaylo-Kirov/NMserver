const express = require('express')
const app = express()
const axios = require('axios')
const API = require('./config/APIdetails').API_URL

const PORT = process.env.port || 5001

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    axios.get(API)
    .then((response) => {
        countries = response.data;
        res.send(JSON.stringify(countries));
    })
    .catch((err) => console.log(err));
})

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))