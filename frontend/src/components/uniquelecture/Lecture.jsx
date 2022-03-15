import React from 'react';
import PropTypes from 'prop-types';

function Lecture({ lectureById }) {
  return (
    <section>
      <h2>
        {lectureById.lecture}
      </h2>
      <h3>
        Date:
        {' '}
        {lectureById.startDate}
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
      <button type="button">teste</button>
      <button type="button">teste</button>
    </section>
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
