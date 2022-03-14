import React from 'react';
import axios from 'axios';

function LoginButton({ loginForm }) {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <button type="submit" onClick={(e) => handleLogin(e)}>
      Login
    </button>
  );
}

export default LoginButton;
