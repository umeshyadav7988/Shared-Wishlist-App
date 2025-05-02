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

  return (
    <div>
      <h2>{wishlist?.name}</h2>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product name" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul>
        {wishlist?.products?.map((p) => (
          <li key={p._id}>
            <img src={p.image} alt={p.name} width="50" />
            {p.name} - ${p.price} (by {p.addedBy})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;