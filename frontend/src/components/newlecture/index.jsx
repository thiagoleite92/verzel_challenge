import React, { useContext, useState } from 'react';
import MainContext from '../../context/MainContext';
import { BackToHome, CreateNewLectureButton } from '../buttons';
import NewLectureForm from './NewLecture';

export default function Index() {
  const { moduleToCreateNewLecture } = useContext(MainContext);
  const [newLectureInfo, setNewLectureInfo] = useState({
    lecture: '',
    startDate: '',
    moduleId: moduleToCreateNewLecture,
  });

  const handleNewLectureForm = ({ target }) => {
    const { name, value } = target;
    setNewLectureInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  return (
    <NewLectureForm>
      <label htmlFor="lecture">
        New Lecture:
        {' '}
        <input
          type="text"
          name="lecture"
          required
          onChange={(e) => handleNewLectureForm(e)}
          value={newLectureInfo.lecture}
          placeholder="Lecture Name"
        />
      </label>
      <label htmlFor="startDate">
        Start Date:
        {' '}
        <input
          type="text"
          name="startDate"
          required
          onChange={(e) => handleNewLectureForm(e)}
          value={newLectureInfo.startDate}
          placeholder="Format: YYYY-MM-DD"
        />
      </label>
      <label htmlFor="moduleId">
        Module ID:
        {' '}
        <input
          disabled
          type="text"
          name="moduleId"
          required
          onChange={(e) => handleNewLectureForm(e)}
          value={newLectureInfo.moduleId}
          placeholder="Ex: 1"
        />
      </label>
      <CreateNewLectureButton newModuleInfo={newLectureInfo} />
      <BackToHome />
    </NewLectureForm>
  );
}
