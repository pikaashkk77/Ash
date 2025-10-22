import React, { useState } from 'react';
import './adminaccess.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import SideMenu from './SideMenu';

const AdminLogin = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', {
        username,
        password
      });

      
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        navigate('/admin-dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Invalid username or password'); 
    } 
  };

  return (
    <div className="admin-modal">
      <div className="admin-modal-content">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
      <SideMenu/>
    </div>
  );
};

export default AdminLogin;