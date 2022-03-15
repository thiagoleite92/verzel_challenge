import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createModule } from '../../api/api';

function CreateModuleButton({ newModuleInfo }) {
  const navigate = useNavigate();

  const handleCreateModule = async (e) => {
    e.preventDefault();
    try {
      await createModule(newModuleInfo);
      navigate('/');
    } catch (error) {
      window.alert('Duplicated Module, Try another name.');
    }
  };

  return (
    <button type="submit" onClick={(e) => handleCreateModule(e)}>
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
