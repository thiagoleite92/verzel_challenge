import React, { useState } from 'react';
import { CreateModuleButton } from '../buttons';
import NewModuleForm from './NewModuleForm';

export default function Index() {
  const [newModuleInfo, setNewModuleInfo] = useState({
    module: '',
  });

  const handleLoginForm = ({ target }) => {
    const { name, value } = target;
    setNewModuleInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  return (
    <NewModuleForm>
      <label htmlFor="module">
        New Module:
        {' '}
        <input
          type="module"
          name="module"
          required
          onChange={(e) => handleLoginForm(e)}
          value={newModuleInfo.module}
          placeholder="Module Name"
        />
      </label>
      <CreateModuleButton newModuleInfo={newModuleInfo} />
    </NewModuleForm>
  );
}
