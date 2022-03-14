import React from 'react';
import { nanoid } from 'nanoid';

function RenderModule({ modules }) {
  return (
    modules.map((module) => (
      <section key={nanoid()}>
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
