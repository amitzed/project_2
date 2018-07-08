const mongoose = require('mongoose');

const bassSchema = new mongoose.Schema({
  brand: String,
  strings: Number,
  wood: String,
  fretboard: String,
  readyToBuild: Boolean
});

const Bass = mongoose.model('Bass', bassSchema);

module.exports = Bass;
