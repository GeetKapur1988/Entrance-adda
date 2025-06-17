import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 40, color: 'white' }}>
      <h1>Welcome to Entrance Adda</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}
