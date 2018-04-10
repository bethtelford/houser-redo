module.exports = {
  pt1_read: (req, res) => {
    req.app.get('db').pt1.read_all_houses()
      .then(houses => res.status(200).send(houses))
  },
  pt1_create: (req, res) => {
    let { name, address, city, state, zip } = req.body;
    req.app.get('db').pt1.create_house(name, address, city, state, zip)
      .then(_ => res.status(200).send())
  },
  pt1_remove: (req, res) => {
    req.app.get('db').pt1.delete_house(req.params.id)
      .then(_ => res.status(200).send())
  }
}