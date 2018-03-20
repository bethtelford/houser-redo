require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive')
port = 4000;

const app = express();
app.use(bodyParser.json());

massive({
  host: process.env.M_HOST,
  port: process.env.M_PORT,
  database: process.env.M_DATABASE,
  user: process.env.M_USER,
  password: process.env.M_PASSWORD,
  ssl: true
})
  .then(db => {

    app.get('/api/houses', (req, res) => {
      db.read_all_houses()
        .then(houses => res.status(200).send(houses))
    })




    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))
  })



