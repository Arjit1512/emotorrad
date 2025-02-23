import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MyProvider } from './pages/Context';

const App = () => {
  return (
    <MyProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </MyProvider>
  );
};

export default App;
