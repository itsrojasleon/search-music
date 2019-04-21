const mongoose = require('mongoose');

const { Schema } = mongoose;

const songSchema = new Schema({
  name: String
});
module.exports = songSchema;
