import React, { useState } from 'react';
import './Login.css';

function Login({ profile, onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.password === password) {
      setError('connecté');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="login">
      <h2>Login for {profile.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
