import React from 'react';
import axiosInstance from '../../../config/axios';

export const Login: React.FC = () => {
  const [login, setLogin] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance({
        url: '/login',
        method: 'POST',
        data: {
          login,
          password,
        },
      });

      if (response?.data) {
        window.alert(`Usuário logado com sucesso! - Token ${response.data.Authorization}`);
        setLogin('');
        setPassword('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
