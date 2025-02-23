import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import '../styling/Login.css';
import logo from '../logo.png';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', email, password);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Google login success:', decoded);
    navigate("/");
  };

  const handleGoogleError = () => {
    console.log('Google login failed');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1>BASE</h1>
        </div>
        <div className="social-icons">
          <a href="https://github.com" className="social-icon">
            <FaGithub size={40} color='white' />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <FaTwitter size={40} color='white' />
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <FaLinkedin size={40} color='white' />
          </a>
          <a href="https://discord.com" className="social-icon">
            <FaDiscord size={40} color='white' />
          </a>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Sign In</h2>
          <p className="subtitle">Sign in to your account</p>

          <div className="oauth-buttons">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
            <button className="apple-button">
              <FaApple size={30} color="white" style={{ marginRight: "10px" }} />
              Sign in with Apple
            </button>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <a href="#" className="forgot-password">Forgot password?</a>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>

          <p className="register-link">
            Don't have an account? <a href="#">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;