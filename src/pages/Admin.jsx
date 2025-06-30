// src/pages/Admin.jsx
import React, { useState } from 'react';

export default function Admin({ products, setProducts }) {
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.description && form.price && form.image) {
      const newProduct = {
        id: Date.now(),
        ...form,
      };
      setProducts((prev) => [...prev, newProduct]);
      setForm({ name: '', description: '', price: '', image: '' });
    }
  };

  const handleEdit = (id, field, value) => {
    const updated = products.map((product) =>
      product.id === id ? { ...product, [field]: value } : product
    );
    setProducts(updated);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Ești sigur că vrei să ștergi acest produs?');
    if (confirmDelete) {
      const updated = products.filter((product) => product.id !== id);
      setProducts(updated);
    }
  };

  return (
    <div>
      <h1>Administrare Produse</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          name="name"
          placeholder="Nume produs"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Descriere"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Preț"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Nume fișier imagine (ex: /yoda.jpeg)"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit">Adaugă produs</button>
      </form>

      <h2>Produse existente</h2>
      {products.map((product) => (
        <div key={product.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
          <input
            value={product.name}
            onChange={(e) => handleEdit(product.id, 'name', e.target.value)}
          />
          <input
            value={product.description}
            onChange={(e) => handleEdit(product.id, 'description', e.target.value)}
          />
          <input
            value={product.price}
            onChange={(e) => handleEdit(product.id, 'price', e.target.value)}
          />
          <input
            value={product.image}
            onChange={(e) => handleEdit(product.id, 'image', e.target.value)}
          />
          <button onClick={() => handleDelete(product.id)} style={{ marginLeft: '10px' }}>
            Șterge
          </button>
        </div>
      ))}
    </div>
  );
}
