import React from 'react';
import { useParams } from 'react-router';
import { deleteUser } from '../../../services/users';

export const UserDelete: React.FC = () => {
  const { id } = useParams();

  const handleDelete = async () => {
    const response = await deleteUser(Number(id));
    if (response) {
      window.alert(`Usuário ${id} deletado com sucesso!`);
    }
  };

  return (
    <div>
      <h1>Usuário {id}</h1>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  );
};
