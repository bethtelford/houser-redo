require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctrl = require('./controller'),
      port = 4000;

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);

    app.get('/api/houses', ctrl.read)

    app.post('/api/house', ctrl.create)

    app.delete('/api/house/:id', ctrl.remove)

    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))
  })



