import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

function RenderModule({ modules }) {
  if (modules.length === 0) {
    return <h3>Modules not found. Please, contact the administration</h3>;
  }

  return modules.map((module) => (
    <Link key={nanoid()} to={`/module/${module.id}`}>
      <section>
        <h3>{module.module}</h3>
        <h4>
          Lectures avaible:
          {' '}
          {module.lectures}
        </h4>
      </section>
    </Link>
  ));
}

RenderModule.propTypes = {
  modules: PropTypes.arrayOf(PropTypes.shape({
    lectures: PropTypes.string,
    module: PropTypes.string,
    id: PropTypes.string,
  })),
}.isRequired;

export default RenderModule;
