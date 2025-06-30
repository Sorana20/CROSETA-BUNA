// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
    </div>
  );
}

