const db = require("../models");
const Users = db.users

exports.getAllDatas = (req, res) => {
  Users.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.postData = (req, res) => {
  Users.create(req.body)
    .then(() => res.send({message: "Data has been saved"}))
    .catch(err => res.status(500).send({message: err.message}))
}

exports.getData = (req, res) => {
  const {id} = req.params

  Users.findById(id)
  .then(data => res.send({data}))
  .catch(err => res.status(500).send({message: err.message}))
}

exports.updateData = (req, res) => {
  const {id} = req.params

  Users.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({message: "Id not found!"})
      }
      res.send({message: "Data has been updated"})
    }).catch(err => res.status(500).send({message: err.message}))
} 

exports.deleteData = (req, res) => {
  const {id} = req.params

  Users.findByIdAndRemove(id)
  .then(data => {
    if(!data){
      res.status(404).send({message: "Id not found!"});
    }
    res.send({message: "Data has been deleted"})
  }).catch(err => res.send({message: err.messagae}))
}