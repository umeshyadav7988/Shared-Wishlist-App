const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  wishlistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wishlist' },
  name: String,
  image: String,
  price: Number,
  addedBy: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
