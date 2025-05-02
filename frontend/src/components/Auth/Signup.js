import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default Signup;