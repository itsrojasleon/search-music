const mongoose = require('mongoose');
//const SongSchema = require('./Song');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  user: String,
  song_name: String,
  song_id: String
  //songs: [SongSchema]
});
mongoose.model('favorites', favoriteSchema);
