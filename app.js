console.log('hello world!');
// imports are a little different in  Node
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./data.js');

app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World!')
});

app.get('/videogames', (req, res) => {
    console.log(req.query);

    res.json(data);
});

app.get('/videogames/:id', (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    const videogameID = Number(req.params.id);
    const videogame = data.find((item) => item.id === videogameID);
    console.log(videogame);
    res.json(videogame);
});

// app.get('/videogames/system/:id', (req, res) => {
//     console.log(req.params.id);
//     console.log(typeof req.params.id);
//     const videogameSystemID = req.params.id;
//     const videogame = data.find((item) => item.system === videogameSystemID);
//     console.log(videogame);
//     res.json(videogame);
// });

module.exports = app;