import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteLecture } from '../../api/api';

function DeleteLectureButton({ moduleId }) {
  const navigate = useNavigate();
  const { lectureId } = useParams();

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteLecture(lectureId);
    navigate(`/module/${moduleId}`);
  };

  return (
    <button
      type="submit"
      onClick={(e) => handleDelete(e)}
    >
      Delete
    </button>
  );
}

DeleteLectureButton.propTypes = {
  moduleId: PropTypes.string,
}.isRequired;

export default DeleteLectureButton;
