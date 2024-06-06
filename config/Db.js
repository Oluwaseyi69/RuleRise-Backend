require('dotenv').config();

const mongoose = require('mongoose');



//connect to database

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://localhost:27017/Products', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('MongoDB connected...');
  } catch (err) {
      console.error(err.message);
      process.exit(1);
  }
};

module.exports = connectDB;