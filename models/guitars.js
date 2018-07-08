const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  brand: String,
  strings: Number,
  wood: String,
  fretboard: String,
  readyToBuild: Boolean
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;
