import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editModule } from '../../api/api';

function EditModuleButton({ editModuleInfo }) {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  const handleEditModule = async (e) => {
    e.preventDefault();
    try {
      await editModule(editModuleInfo, moduleId);
      navigate('/');
    } catch (error) {
      window.alert('Duplicated Module, Try another name.');
    }
  };

  return (
    <button type="submit" onClick={(e) => handleEditModule(e)}>
      EDIT MODULE NAME
    </button>
  );
}

EditModuleButton.propTypes = {
  newModuleInfo: PropTypes.shape({
    module: PropTypes.string,
  }),
}.isRequired;

export default EditModuleButton;
