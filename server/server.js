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

    app.get('/api/pt2/houses', ctrl.pt2_read)

    app.post('/api/pt2/house', ctrl.pt2_create)

    app.delete('/api/pt2/house/:id', ctrl.pt2_remove)

    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))
  })



