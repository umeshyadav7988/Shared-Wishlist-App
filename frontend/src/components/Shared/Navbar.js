import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px', background: '#ddd' }}>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={handleLogout} style={{ marginLeft: '20px' }}>Logout</button>
    </nav>
  );
};

export default Navbar;