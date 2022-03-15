import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [userInfo, setUserInfo] = useState();
  const [moduleToCreateNewLecture, setModuleToCreateNewLecture] = useState(0);

  useEffect(() => {
    const fetchUserInfo = () => {
      const localUser = JSON.parse(localStorage.getItem('user'));
      setUserInfo(localUser);
    };
    fetchUserInfo();
  }, []);

  const context = useMemo(() => ({
    userInfo,
    setUserInfo,
    moduleToCreateNewLecture,
    setModuleToCreateNewLecture,
  }
  ), [userInfo, moduleToCreateNewLecture]);

  return (
    <MainContext.Provider value={context}>
      { children }
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default MainProvider;
