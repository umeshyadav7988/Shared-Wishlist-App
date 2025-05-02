import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; // Import the CSS file

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert(res.data.message);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Signup failed');
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="auth-input"
      />
      <button onClick={handleSignup} className="auth-button">Signup</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default Signup;
