import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function DisplayUserInfo({ loggedUserInfo: { name, role } }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <div>
        Name:
        { name }
      </div>
      {
        role === 'admin'
          ? <span>Admin</span>
          : null
      }
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </>
  );
}

DisplayUserInfo.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
}.isRequired;

export default DisplayUserInfo;
