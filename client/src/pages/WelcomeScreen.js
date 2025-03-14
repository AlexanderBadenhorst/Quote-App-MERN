import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const WelcomeScreen = () => {
  return (
    <div className="container">
      <h1>Welcome to My Quote Application</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
