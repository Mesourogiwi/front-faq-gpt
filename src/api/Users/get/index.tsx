import { FC, useState, useEffect } from 'react';
import { getUsers } from '../../../services/users';
import { userResponse } from '../../../types';

export const Users: FC = () => {
  const [usersData, setUsersData] = useState<userResponse[]>([]);

  const fetchUsers = async () => {
    const response = await getUsers();
    if (response) setUsersData(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
