const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  brand: {type: String},
  strings: Number,
  wood: {type: String},
  fretboard: {type: String},
  readyToBuild: Boolean
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;
