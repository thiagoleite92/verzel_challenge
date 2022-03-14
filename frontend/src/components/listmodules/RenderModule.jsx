import React from 'react';

function RenderModule({ modules }) {
  return (
    modules.map((module) => (
      <section>
        <div>{module.module}</div>
        <div>
          Lectures avaible:
          {' '}
          {module.lectures}
        </div>
      </section>
    ))
  );
}

export default RenderModule;
