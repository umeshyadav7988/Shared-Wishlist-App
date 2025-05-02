const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// Create
router.post('/', async (req, res) => {
  const { name, createdBy } = req.body;
  const wishlist = new Wishlist({ name, createdBy, users: [createdBy] });
  await wishlist.save();
  res.json(wishlist);
});

// Get single wishlist — put this above /:email
router.get('/one/:id', async (req, res) => {
  const wishlist = await Wishlist.findById(req.params.id);
  res.json(wishlist);
});

// Read all for a user
router.get('/:email', async (req, res) => {
  const { email } = req.params;
  const wishlists = await Wishlist.find({ users: email });
  res.json(wishlists);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Wishlist.findByIdAndDelete(req.params.id);
  res.json({ message: 'Wishlist deleted' });
});

module.exports = router;
