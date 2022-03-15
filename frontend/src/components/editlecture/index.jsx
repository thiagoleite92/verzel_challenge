import React from 'react';
import PropTypes from 'prop-types';
// import { EditModuleButton } from '../buttons';
import EditLectureForm from './EditLectureForm';

export default function Index({
  field, setEditLectureInfo, name, placeHolder,
}) {
  const handleEditLecture = ({ target }) => {
    const { value } = target;
    setEditLectureInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  return (
    <EditLectureForm>
      <label htmlFor={field}>
        Edit Lecture:
        {' '}
        <input
          type="text"
          name={field}
          required
          onChange={(e) => handleEditLecture(e)}
          value={field}
          placeholder={placeHolder}
        />
      </label>
    </EditLectureForm>
  );
}

Index.propTypes = {
  setEditModuleId: PropTypes.func,
}.isRequired;
