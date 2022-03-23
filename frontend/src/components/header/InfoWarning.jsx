import React from 'react';
import PropTypes from 'prop-types';

function InfoWarning({ text }) {
  return (
    <span style={{ backgroundColor: 'lightgreen' }}>{text}</span>
  );
}

InfoWarning.propTypes = {
  text: PropTypes.string,
}.isRequired;

export default InfoWarning;
