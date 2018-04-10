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

    app.get('/api/pt1/houses', ctrl.pt1_read)

    app.post('/api/pt1/house', ctrl.pt1_create)

    app.delete('/api/pt1/house/:id', ctrl.pt1_remove)

    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))
  })



