const mongoose = require('mongoose');
const config = require('config');

const mongoUri = config.get('MongoURI');

const ConnectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('MONGODB connected successfully!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;
