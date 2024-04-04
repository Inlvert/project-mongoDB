const mongoose = require('mongoose');
const CONSTANTS = require('../constans');
const User = require('./user')

async function connectToDB () {
  await mongoose.connect(CONSTANTS.DB_URL)
}

connectToDB().catch(err => console.log(err));

module.exports = {
  User
}