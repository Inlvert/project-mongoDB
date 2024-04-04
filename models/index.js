const mongoose = require('mongoose');
const CONSTANTS = require('../constans');

async function connectToDB () {
  await mongoose.connect(CONSTANTS.DB_URL)
}

connectToDB().catch(err => console.log(err));

