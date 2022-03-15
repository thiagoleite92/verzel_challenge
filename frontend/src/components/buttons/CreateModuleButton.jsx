import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createModule } from '../../api/api';

function CreateModuleButton({ newModuleInfo }) {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await createModule(newModuleInfo);
      console.log(data);
      navigate('/');
    } catch (error) {
      window.alert('Duplicated Module, Try another name.');
    }
  };

  return (
    <button type="submit" onClick={(e) => handleLogin(e)}>
      Create Module
    </button>
  );
}

CreateModuleButton.propTypes = {
  newModuleInfo: PropTypes.shape({
    module: PropTypes.string,
  }),
}.isRequired;

export default CreateModuleButton;
