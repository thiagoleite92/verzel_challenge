import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackToHome() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/home');
  };

  return (
    <button
      type="button"
      onClick={handleNavigateHome}
    >
      Back to home
    </button>
  );
}

export default BackToHome;
