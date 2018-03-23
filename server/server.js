require('dotenv').config();
const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive')
port = 4000;

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {

    app.get('/api/houses', (req, res) => {
      db.read_all_houses()
        .then(houses => res.status(200).send(houses))
    })

    app.post('/api/house', (req, res) => {
      let { name, address, city, state, zip, img, mortgage, rent } = req.body;
      db.create_house(name, address, city, state, zip, img, mortgage, rent)
        .then(_ => res.status(200).send())
    })

    app.delete('/api/house/:id', (req, res) => {
      db.delete_house(req.params.id)
        .then(_ => res.status(200).send())
    })

    app.listen(port, _ => console.log(`Housten we have lift off on port ${port}`))
  })



