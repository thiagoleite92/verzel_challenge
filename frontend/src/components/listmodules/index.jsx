import React, { useEffect, useState } from 'react';
import { getModules } from '../../api/api';
import ListModules from './ListModules';
import RenderModule from './RenderModule';

export default function Index() {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      const data = await getModules();
      setModules(data);
    };
    fetchModules();
  }, []);

  return (
    modules
      ? (
        <ListModules>
          <RenderModule modules={modules} />
        </ListModules>
      )
      : 'Carregando Modulos'
  );
}
