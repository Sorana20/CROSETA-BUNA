// src/pages/Produse.jsx
import React from 'react';
import ProductList from '../components/ProductList';

export default function Products({ products }) {
  return (
    <div>
      <h1>Produsele Noastre</h1>
      <ProductList products={products} />
    </div>
  );
}



