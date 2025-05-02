const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/wishlists', require('./routes/wishlistRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
