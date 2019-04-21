const mongoose = require('mongoose');
//const SongSchema = require('./Song');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  user: String
  //songs: [SongSchema]
});
mongoose.model('favorites', favoriteSchema);
