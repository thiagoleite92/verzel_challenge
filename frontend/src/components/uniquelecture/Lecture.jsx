import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainContext from '../../context/MainContext';
import { BackToHome, DeleteLectureButton, EditLectureButton } from '../buttons';
import EditLectureForm from '../editlecture';

function Lecture({ lectureById }) {
  const { userInfo } = useContext(MainContext);
  const { lectureId } = useParams();
  const [editLectureId, setEditLectureId] = useState(null);

  const [editLectureInfo, setEditLectureInfo] = useState({
    lecture: '',
    startDate: '',
    moduleId: lectureById.moduleId,
  });

  return (
    <>
      <section>
        <h2>
          {
            editLectureId
              ? (
                <EditLectureForm
                  field={editLectureInfo.lecture}
                  setEditLectureInfo={setEditLectureInfo}
                  name="lecture"
                  placeHolder="Minimum 12 chars"
                />
              )
              : lectureById.lecture
          }
        </h2>
        <h3>
          Date:
          {' '}
          {
            editLectureId
              ? (
                <EditLectureForm
                  field={editLectureInfo.startDate}
                  name="startDate"
                  setEditLectureInfo={setEditLectureInfo}
                  placeHolder="YYYY-MM-DD"
                />
              )
              : lectureById.startDate
          }
        </h3>
        <h4>
          Module:
          {' '}
          {lectureById.moduleId}
        </h4>
        <h4>What are you going to learn?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam earum enim sunt. Ullam tempora unde molestias doloremque, eius aspernatur
          dolorem ratione nulla at, ut facere iste dolorum cum doloribus corrupti.
        </p>
        {
            editLectureId
              ? (
                <>
                  <EditLectureButton editLectureInfo={editLectureInfo} lectureId={lectureId} />
                  <button type="button" onClick={() => setEditLectureId(null)}>
                    CANCEL
                  </button>
                </>
              )
              : null
          }
      </section>
      <div>
        {
          !!userInfo && userInfo.role === 'admin'
            ? (
              <>
                <button type="button" onClick={() => setEditLectureId(lectureId)}>Edit</button>
                <DeleteLectureButton lectureId={lectureId} moduleId={editLectureInfo.moduleId} />
              </>
            )
            : null
          }
        <BackToHome />
      </div>
    </>
  );
}

Lecture.propTypes = {
  lectureById: PropTypes.shape({
    startDate: PropTypes.string,
    moduleId: PropTypes.string,
    lecture: PropTypes.string,
  }),
}.isRequired;

export default Lecture;
