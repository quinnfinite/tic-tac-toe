const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()
app.use(helmet())
app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile('index');
})

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening at http://127.0.01:${port}`)
});