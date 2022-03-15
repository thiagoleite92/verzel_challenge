import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

function RenderModule({ modules }) {
  if (modules.length === 0) {
    return 'Modules not found. Please, contact the administration.';
  }

  return (
    modules.map((module) => (
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
    ))
  );
}

export default RenderModule;
