const db = require("../models");
const Users = db.users

exports.getAllData = (req, res) => {
  Users.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.postData = (req, res) => {
  Users.create(req.body)
    .then(() => res.send({message: "Data berhasil disimpan"}))
    .catch(err => res.status(500).send({message: err.message}))
}