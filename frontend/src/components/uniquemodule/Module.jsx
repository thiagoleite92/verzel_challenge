/* eslint-disable react/prop-types */
import React from 'react';

function Module({ moduleById }) {
  return (
    <>
      <section>
        <div>
          <h3>
            Module
            {' '}
            {moduleById.module}
          </h3>
        </div>
      </section>
      {
        moduleById.Lecture.map((lec) => (
          <div className="lectures-container">
            <h2>
              Lecture:
              {' '}
              {lec.lecture}
            </h2>
            <h3>
              Date:
              {' '}
              {lec.startDate}
            </h3>
            <h4>
              Module:
              {' '}
              {lec.moduleId}
            </h4>
          </div>
        ))
      }
    </>
  );
}

export default Module;
