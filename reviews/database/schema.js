const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
  url: String,
});

const characteristicsSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const reviewsSchema = new mongoose.Schema({
  product_id: String,
  user_id: String,
  email: String,
  summary: String,
  body: String,
  recommended: Boolean,
  photos: [photosSchema],
  characteristics: [characteristicsSchema],
}, {
  timestamps: true,
});

const reviews = mongoose.model('Review', reviewsSchema);
module.exports = { reviews };
