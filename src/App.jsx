// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Acasa';
import Products from './pages/Produse';
import About from './pages/Despre';
import Admin from './pages/Admin';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Jucărie Yoda',
      description: 'Jucărie baby yoda croșetată manual.',
      price: '45 lei',
      image: '/babyoda.jpeg'
    },
    {
      id: 2,
      name: 'Jucărie Naruto',
      description: 'Naruto cu safety eyes - perfect pentru cei mici, pasionați de lumea anime.',
      price: '60 lei',
      image: '/naruto.jpeg'
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div className="layout">
      <header className="header">
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          Croșeta Optimistă
          <img src="/yoda2.png" alt="Ghem de ață" style={{ height: '40px' }} />
        </h1>
      </header>

      <Navbar />

      <main style={{ padding: '20px' }}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produse" element={<Products products={products} addProduct={addProduct} />} />
          <Route path="/despre" element={<About />} />
          <Route path="/admin" element={<Admin products={products} setProducts={setProducts} />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Croșeta Optimistă. Toate drepturile rezervate.</p>
      </footer>
    </div>
  );
}

export default App;
