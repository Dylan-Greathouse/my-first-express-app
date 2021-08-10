console.log('hello world!');
// imports are a little different in  Node
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World!')
});

app.get('/puppies', (req, res) => {
    console.log(req.query);
  res.send(`Puppies are cute! Such as ${req.query.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
