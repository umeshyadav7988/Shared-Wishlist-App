import React from 'react';
import { useNavigate } from 'react-router-dom';

const WishlistList = ({ wishlists }) => {
  const navigate = useNavigate();

  return (
    <div>
      {wishlists.map((wishlist) => (
        <div key={wishlist._id} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
          <h3>{wishlist.name}</h3>
          <p>Created by: {wishlist.createdBy}</p>
          <button onClick={() => navigate(`/wishlist/${wishlist._id}`)}>View</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistList;