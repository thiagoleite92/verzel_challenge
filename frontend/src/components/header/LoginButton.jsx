import React from 'react';
import { postLogin } from '../../api/api';

function LoginButton({ loginForm }) {
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await postLogin(loginForm);
    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <button type="submit" onClick={(e) => handleLogin(e)}>
      Login
    </button>
  );
}

export default LoginButton;
