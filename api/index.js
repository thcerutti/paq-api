const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello world')
})

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


app.listen(port, () => {
  console.log(`listening port ${port}`)
})

module.exports = app

