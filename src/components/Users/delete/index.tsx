import React from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const UserDelete: React.FC = () => {
  const { id } = useParams();

  const deleteUser = async () => {
    try {
      const response = await axiosInstance({
        url: `/users/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      if (response?.data) {
        window.alert(`Usuário ${id} deletado com sucesso!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Usuário {id}</h1>
      <button onClick={deleteUser}>Deletar</button>
    </div>
  );
};
