const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Add product
router.post('/', async (req, res) => {
  const { wishlistId, name, image, price, addedBy } = req.body;
  const product = new Product({ wishlistId, name, image, price, addedBy });
  await product.save();
  res.json(product);
});

// Get all products for wishlist
router.get('/:wishlistId', async (req, res) => {
  const products = await Product.find({ wishlistId: req.params.wishlistId });
  res.json(products);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
