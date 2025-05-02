import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './pages/Dashboard';
import WishlistPage from './components/Wishlist/WishlistPage';
import ProtectedRoute from './components/Shared/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/wishlist/:id" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
