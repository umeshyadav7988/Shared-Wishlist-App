import React from 'react';
import { useNavigate } from 'react-router-dom';

const WishlistList = ({ wishlists }) => {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '30px auto',
      padding: '0 20px',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '10px 0',
      backgroundColor: '#fefefe',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    title: {
      margin: '0 0 5px',
      color: '#333',
    },
    creator: {
      margin: '0 0 10px',
      fontSize: '14px',
      color: '#777',
    },
    button: {
      padding: '8px 12px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      {wishlists.map((wishlist) => (
        <div key={wishlist._id} style={styles.card}>
          <h3 style={styles.title}>{wishlist.name}</h3>
          <p style={styles.creator}>Created by: {wishlist.createdBy}</p>
          <button style={styles.button} onClick={() => navigate(`/wishlist/${wishlist._id}`)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistList;
