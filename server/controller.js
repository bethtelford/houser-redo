module.exports = {
  read: (req, res) => {
    req.app.get('db').read_all_houses()
      .then(houses => res.status(200).send(houses))
  },
  create: (req, res) => {
    let { name, address, city, state, zip } = req.body;
    req.app.get('db').create_house(name, address, city, state, zip)
      .then(_ => res.status(200).send())
  },
  remove: (req, res) => {
    req.app.get('db').delete_house(req.params.id)
      .then(_ => res.status(200).send())
  }
}