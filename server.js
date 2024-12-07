const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.get('/withQuery', (req, res) => {
  res.send({
    'route': 'withQuery',
    'query': req.query
  })
})

app.get('/withParams/:id', (req, res) => {
  res.send({
    'route': 'withParams',
    'query': req.params
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
