import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createLecture } from '../../api/api';

function CreateModuleButton({ newModuleInfo }) {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await createLecture(newModuleInfo);
      navigate('/');
    } catch (error) {
      window.alert('Duplicated Lecture. Try another name.');
    }
  };

  return (
    <button type="submit" onClick={(e) => handleLogin(e)}>
      ADD LECTURE
    </button>
  );
}

CreateModuleButton.propTypes = {
  newModuleInfo: PropTypes.shape({
    lecture: PropTypes.string,
    startDate: PropTypes.string,
    moduleId: PropTypes.string,
  }),
}.isRequired;

export default CreateModuleButton;
