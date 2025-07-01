import React from 'react';
import './NotFound.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-subtitle">Page Not Found</p>
      <p className="notfound-text">Sorry, the page you're looking for doesn't exist.</p>
      <button className="notfound-button" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
