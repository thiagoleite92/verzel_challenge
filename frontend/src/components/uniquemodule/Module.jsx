/* eslint-disable react/prop-types */
import React from 'react';

function Module({ moduleById }) {
  return (
    <>
      <section>
        <div>
          <h3>
            Module
            <br />
            {moduleById.module}
          </h3>
          <button type="button">voltar</button>
        </div>
      </section>
      {
        moduleById.Lecture.map((lec) => (
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
            <button type="button">teste</button>
            <button type="button">teste</button>
          </div>
        ))
      }
    </>
  );
}

export default Module;
