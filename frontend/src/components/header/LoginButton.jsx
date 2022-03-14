import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postLogin } from '../../api/api';
import MainContext from '../../context/MainContext';

function LoginButton({ loginForm }) {
  const { setUserInfo } = useContext(MainContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await postLogin(loginForm);
      localStorage.setItem('user', JSON.stringify(data));
      setUserInfo(loginForm);
      navigate('/');
    } catch (error) {
      window.alert('User not found');
    }
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
