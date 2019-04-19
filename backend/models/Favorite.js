const moongose = require('moongose');
const SongSchema = require('./Song');

const { Schema } = moongose;

const favoriteSchema = new Schema({
  user: String,
  songs: [SongSchema]
});
moongose.model('favorites', favoriteSchema);
