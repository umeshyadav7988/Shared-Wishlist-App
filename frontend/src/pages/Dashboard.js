import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [wishlists, setWishlists] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchWishlists = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const res = await API.get(`/api/wishlists/${user.email}`);
      setWishlists(res.data);
    } catch (err) {
      console.error('Failed to fetch wishlists:', err.message);
    }
  };

  const createWishlist = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    await API.post('/api/wishlists', { name, createdBy: user.email });
    setName('');
    fetchWishlists();
  };

  useEffect(() => { fetchWishlists(); }, []);

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    input: {
      width: 'calc(100% - 90px)',
      padding: '10px',
      marginRight: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '6px',
      backgroundColor: '#f9f9f9',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard</h2>
      <div>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Wishlist Name"
        />
        <button style={styles.button} onClick={createWishlist}>Create</button>
      </div>
      <ul style={styles.list}>
        {wishlists.map(w => (
          <li
            key={w._id}
            style={styles.listItem}
            onClick={() => navigate(`/wishlist/${w._id}`)}
          >
            {w.name} by {w.createdBy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
