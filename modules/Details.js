// models/Details.js

const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
  name: String,
  coverPhoto: String,
  // Add more fields as needed
});

const Details = mongoose.model('Details', detailsSchema);

module.exports = Details;
