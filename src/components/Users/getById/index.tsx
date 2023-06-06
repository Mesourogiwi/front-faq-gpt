import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getUser } from '../../../services/users';
import { userResponse } from '../../../types';

export const UserById: FC = () => {
  const [user, setUser] = useState<userResponse>();
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await getUser(Number(id));
    setUser(response);
  };

  useEffect(() => {
    fetchUser();
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
