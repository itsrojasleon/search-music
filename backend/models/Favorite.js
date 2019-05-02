const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoriteSchema = new Schema({
  user_id: String,
  name: String,
  album: Object,
  artists: Array,
  id: String,
  preview_url: String
});
mongoose.model('favorites', favoriteSchema);
