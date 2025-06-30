// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#e0d4c0', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Acasă</Link>
      <Link to="/produse" style={{ marginRight: '10px' }}>Produse</Link>
      <Link to="/despre" style={{ marginRight: '10px' }}>Despre</Link>
      <Link to="/admin" style={{ marginRight: '10px' }}>Admin</Link>

    </nav>
  );
}