import React from 'react';
import axiosInstance from '../../../config/axios';

export const UserCreate: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [login, setLogin] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const createUser = async () => {
    try {
      const response = await axiosInstance({
        url: '/users/',
        method: 'POST',
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

  return (
    <div>
      <h1>Criar Usuário</h1>
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
      <button onClick={createUser}>Cadastrar</button>
    </div>
  );
};
