import React from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const EditUser: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [login, setLogin] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
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

      setName(data.name);
      setLogin(data.login);
    } catch (err) {
      console.log(err);
    }
  };

  const editUser = async () => {
    try {
      const response = await axiosInstance({
        url: `/users/${id}`,
        method: 'PUT',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
        data: {
          name,
          login,
          password,
        },
      });

      if (response?.data) {
        window.alert(`Usuário ${response.data.id} criado com sucesso!`);
        setName('');
        setLogin('');
        setPassword('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Editar Usuário</h1>
      <label>Nome: </label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <label>Login: </label>
      <input id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <br />
      <br />
      <label>Senha: </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={editUser}>Salvar</button>
    </div>
  );
};
