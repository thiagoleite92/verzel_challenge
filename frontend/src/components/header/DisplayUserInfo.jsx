import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/MainContext';

function DisplayUserInfo() {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(MainContext);

  const handleLogOut = () => {
    localStorage.clear();
    setUserInfo(null);
    navigate('/');
  };

  const goToNewModule = () => {
    navigate('/new/module');
  };

  return (
    <>
      <div>
        Name:
        {' '}
        { userInfo.name }
      </div>
      {
        userInfo.role === 'admin'
          ? (
            <>
              <span>Administrator</span>
              <button type="button" onClick={goToNewModule}>Add new module</button>
            </>
          )
          : null
      }
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </>
  );
}

export default DisplayUserInfo;
