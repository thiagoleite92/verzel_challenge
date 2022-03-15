import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditModuleForm from './EditModuleForm';
import { EditModuleButton } from '../buttons';

export default function Index({ setEditModuleId }) {
  const [editModuleInfo, setEditModuleInfo] = useState({
    module: '',
  });

  const handleEditModule = ({ target }) => {
    const { name, value } = target;
    setEditModuleInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  return (
    <>
      <EditModuleForm>
        <label htmlFor="module">
          Edit Module:
          {' '}
          <input
            type="module"
            name="module"
            required
            onChange={(e) => handleEditModule(e)}
            value={editModuleInfo.module}
            placeholder="Module Name"
          />
        </label>
      </EditModuleForm>
      <EditModuleButton editModuleInfo={editModuleInfo} />
      <button type="button" onClick={() => setEditModuleId(null)}>
        CANCEL
      </button>
    </>
  );
}

Index.propTypes = {
  setEditModuleId: PropTypes.func,
}.isRequired;
