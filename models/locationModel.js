const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  username: String,
  lat: Number,
  lng: Number,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
