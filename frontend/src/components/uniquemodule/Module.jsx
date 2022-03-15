import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import MainContext from '../../context/MainContext';
import EditModule from '../editmodule';
import { BackToHome, DeleteModuleButton } from '../buttons';

function Module({ moduleById }) {
  const { userInfo } = useContext(MainContext);
  const [editModuleId, setEditModuleId] = useState(null);
  const { moduleId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <section>
        <div>
          <h3>
            Module
            <br />
            {
              editModuleId
                ? <EditModule setEditModuleId={setEditModuleId} />
                : moduleById.module
            }
          </h3>
          <br />
          <BackToHome />
        </div>
        <div className="buttons-container">
          {
          !!userInfo && userInfo.role === 'admin'
            ? (
              <>
                <button type="button" onClick={() => setEditModuleId(moduleId)}>Edit</button>
                <DeleteModuleButton />
                <button type="button" moduleId={moduleId} onClick={() => navigate('/new/lecture')}>
                  ADD NEW LECTURE
                </button>
              </>
            )
            : null
          }
        </div>
      </section>
      {
        moduleById.Lecture.length === 0
          ? 'Lectures not found. Please, contact the administration.'
          : (
            moduleById.Lecture.map((lec) => (
              <Link key={nanoid()} to={`/lecture/${lec.id}`}>
                <div className="lectures-container">
                  <h2>
                    Lecture
                    <br />
                    {lec.lecture}
                  </h2>
                  <h3>
                    Date
                    <br />
                    {lec.startDate}
                  </h3>
                  <h4>
                    Module
                    <br />
                    {lec.moduleId}
                  </h4>
                </div>
              </Link>
            )))
      }
    </>
  );
}

Module.propTypes = {
  moduleById: PropTypes.shape({
    module: PropTypes.string,
    Lecture: PropTypes.arrayOf(PropTypes.shape({
      lecture: PropTypes.string,
      startDate: PropTypes.string,
      moduleId: PropTypes.string,
    })),
  }),
}.isRequired;

export default Module;
