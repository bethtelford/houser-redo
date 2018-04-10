module.exports = {
  pt2_read: (req, res) => {
    req.app.get('db').pt2.read_all_houses()
      .then(houses => res.status(200).send(houses))
  },
  pt2_create: (req, res) => {
    let { name, address, city, state, zip, img, mortgage, rent } = req.body;
    req.app.get('db').pt2.create_house(name, address, city, state, zip, img, mortgage, rent)
      .then(_ => res.status(200).send())
  },
  pt2_remove: (req, res) => {
    req.app.get('db').pt2.delete_house(req.params.id)
      .then(_ => res.status(200).send())
  }
}