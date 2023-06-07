import React from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const SessionMessageDelete: React.FC = () => {
  const { id } = useParams();

  const deleteSessionMessage = async () => {
    try {
      const response = await axiosInstance({
        url: `/session-messages/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      if (response?.data) {
        window.alert(`SessionMessage ${id} deletado com sucesso!`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>SessionMessage {id}</h1>
      <button onClick={deleteSessionMessage}>Deletar</button>
    </div>
  );
};
