const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  name: String,
  createdBy: String, 
  users: [String], 
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', WishlistSchema);
