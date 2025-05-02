import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Shared Wishlist App</h1>
      <Link to="/">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
