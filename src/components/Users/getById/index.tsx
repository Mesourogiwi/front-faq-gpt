import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const UserById: FC = () => {
  const [user, setUser] = useState<any>();
  const { id } = useParams();

  const getUser = async () => {
    try {
      const { data } = await axiosInstance({
        url: `/users/${id}`,
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h3>Usuário {id}</h3>
      <ul>
        <li>
          <span>Nome: {user?.name}</span>
        </li>
        <li>
          <span>Email: {user?.login}</span>
        </li>
      </ul>
    </>
  );
};
