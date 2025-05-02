import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; 

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      alert(res.data.message);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
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
      <button onClick={handleLogin} className="auth-button">Login</button>
      <p>Don't have an account? <a href="/signup">Signup</a></p>
    </div>
  );
};

export default Login;
