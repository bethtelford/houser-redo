require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      ctrl = require('./controller'),
      port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build-pt2`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))

    // Part 1
    app.get('/api/pt1/houses', ctrl.pt1_read)

    app.post('/api/pt1/house', ctrl.pt1_create)

    app.delete('/api/pt1/house/:id', ctrl.pt1_remove)

    // Part 2
    app.get('/api/pt2/houses', ctrl.pt2_read)

    app.post('/api/pt2/house', ctrl.pt2_create)

    app.delete('/api/pt2/house/:id', ctrl.pt2_remove)
  })



