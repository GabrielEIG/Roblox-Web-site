const mongoose = require('mongoose');

const subtitleSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const modSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  subtitle: [subtitleSchema],
});

const Mods = mongoose.model('Mod', modSchema);

module.exports = Mods;
