import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { postLogin } from '../../api/api';
import MainContext from '../../context/MainContext';

function LoginButton({ loginForm }) {
  const { setUserInfo } = useContext(MainContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await postLogin(loginForm);
    localStorage.setItem('user', JSON.stringify(data));
    setUserInfo(loginForm);
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
