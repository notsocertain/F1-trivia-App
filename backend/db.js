require('dotenv').config();
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI // Replace with your MongoDB connection URI

mongoose.connect(DB_URI);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
