const moongose = require('mongoose');

const { Schema } = moongose;

const songSchema = new Schema({
  name: String
});
module.exports = songSchema;
