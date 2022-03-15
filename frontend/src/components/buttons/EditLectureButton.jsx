import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { editLecture } from '../../api/api';

function EditLectureButton({ editLectureInfo, lectureId }) {
  const navigate = useNavigate();
  const handleLectureEdit = async (e) => {
    e.preventDefault();
    try {
      await editLecture(editLectureInfo, lectureId);
      navigate(`/module/${editLectureInfo.moduleId}`);
    } catch (error) {
      window.alert('Duplicated Module, Try another name.');
    }
  };

  return (
    <button
      onClick={(e) => handleLectureEdit(e)}
      type="submit"
    >
      CONFIRM
    </button>
  );
}

EditLectureButton.propTypes = {
  editLectureInfo: PropTypes.shape({
    lecture: PropTypes.string,
    startDate: PropTypes.string,
    moduleId: PropTypes.string,
  }),
  lectureId: PropTypes.string,
}.isRequired;

export default EditLectureButton;
