import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteModule } from '../../api/api';

function DeleteModuleButton() {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  console.log(moduleId);
  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await deleteModule(moduleId);
    console.log(data);
    navigate('/');
  };

  return (
    <button
      type="submit"
      onClick={(e) => handleDelete(e)}
    >
      Delete
    </button>
  );
}

export default DeleteModuleButton;
