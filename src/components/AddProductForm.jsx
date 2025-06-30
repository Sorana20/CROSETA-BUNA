// src/components/AddProductForm.jsx
import React, { useState } from 'react';

export default function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      onAddProduct({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h2>Adaugă un produs nou</h2>
      <input placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input placeholder="Descriere" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
      <input placeholder="Preț" value={price} onChange={(e) => setPrice(e.target.value)} /> <br />
      <button type="submit">Adaugă</button>
    </form>
  );
}