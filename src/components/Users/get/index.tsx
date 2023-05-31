import { FC, useState, useEffect } from 'react';
import axiosInstance from '../../../config/axios';

export const Users: FC = () => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axiosInstance({
        url: '/users/',
        method: 'GET',
      });

      setUsersData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(usersData);

  return (
    <>
      <h3>Usuários</h3>
      {usersData?.map((user: any, index) => {
        return (
          <div key={index}>
            <h4>Usuário {user?.id}</h4>
            <ul>
              <li>
                <span>Nome: {user?.name}</span>
              </li>
              <li>
                <span>Email: {user?.login}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
