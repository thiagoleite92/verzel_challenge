import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function MainProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  const context = useMemo(() => ({
    userInfo,
    setUserInfo,
  }
  ), [userInfo]);

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
