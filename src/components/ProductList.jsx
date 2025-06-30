// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
