import React from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

function Provider({ children }) {
  return (
    <MainContext.Provider>
      { children }
    </MainContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
