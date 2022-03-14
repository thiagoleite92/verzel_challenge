import React from 'react';
import PropTypes from 'prop-types';
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

LoginButton.propTypes = {
  loginForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default LoginButton;
