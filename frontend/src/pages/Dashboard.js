import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [wishlists, setWishlists] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchWishlists = async () => {
    const res = await API.get('/api/wishlists');
    setWishlists(res.data);
  };

  const createWishlist = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    await API.post('/api/wishlists', { name, createdBy: user.email });
    setName('');
    fetchWishlists();
  };

  useEffect(() => { fetchWishlists(); }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New Wishlist Name" />
      <button onClick={createWishlist}>Create</button>
      <ul>
        {wishlists.map(w => (
          <li key={w._id} onClick={() => navigate(`/wishlist/${w._id}`)}>
            {w.name} by {w.createdBy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;