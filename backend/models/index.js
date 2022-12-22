const mongoose = require('mongoose');
const db = require('../config/database')

mongoose.set('strictQuery', false)

module.exports = {
  mongoose: mongoose,
  url: db.url,
  users: require('./users.model')(mongoose)
}