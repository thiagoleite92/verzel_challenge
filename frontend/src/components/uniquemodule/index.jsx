import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getModule } from '../../api/api';
import UniqueModule from './UniqueModule';

export default function Index() {
  const { moduleId } = useParams();
  const [moduleById, setModuleById] = useState(null);

  useEffect(() => {
    const fetchModule = async () => {
      const data = await getModule(moduleId);
      setModuleById(data);
    };
    fetchModule();
  }, []);

  return (
    <UniqueModule>
      {
        moduleById
          ? 'modulo'
          : 'carregando modulo'
      }
    </UniqueModule>
  );
}
