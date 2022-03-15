import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { BackToHome } from '../buttons';

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
          <br />
          <BackToHome />
        </div>
      </section>
      {
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
              <button type="button">teste</button>
              <button type="button">teste</button>
            </div>
          </Link>
        ))
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
