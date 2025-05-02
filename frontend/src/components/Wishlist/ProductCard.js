import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100px' }} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <small>Added by: {product.addedBy}</small>
    </div>
  );
};

export default ProductCard;