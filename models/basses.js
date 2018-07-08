const mongoose = require('mongoose');

const bassSchema = new mongoose.Schema({
  brand: {type: String},
  strings: Number,
  wood: {type: String},
  fretboard: {type: String},
  readyToBuild: Boolean
});

const Bass = mongoose.model('Bass', bassSchema);

module.exports = Bass;
