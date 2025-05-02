import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/api';

const WishlistPage = () => {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const fetchWishlist = async () => {
    const res = await API.get(`/api/wishlists/one/${id}`);
    setWishlist(res.data);
  };

  const addProduct = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    await API.post(`/api/products`, {
      wishlistId: id,
      name,
      price,
      image,
      addedBy: user.email
    });
    setName('');
    setPrice('');
    setImage('');
    fetchWishlist();
  };

  useEffect(() => { fetchWishlist(); }, [id]);

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '30px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      textAlign: 'center',
      color: '#333'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      marginBottom: '10px',
      backgroundColor: '#fff',
      padding: '10px',
      borderRadius: '6px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    image: {
      width: '50px',
      height: '50px',
      objectFit: 'cover',
      borderRadius: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{wishlist?.name}</h2>
      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
        />
        <input
          style={styles.input}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          style={styles.input}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <button style={styles.button} onClick={addProduct}>Add Product</button>
      </div>
      <ul style={styles.list}>
        {wishlist?.products?.map((p) => (
          <li key={p._id} style={styles.listItem}>
            <img src={p.image} alt={p.name} style={styles.image} />
            <div>
              <strong>{p.name}</strong> - ${p.price} <br />
              <small>Added by {p.addedBy}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
