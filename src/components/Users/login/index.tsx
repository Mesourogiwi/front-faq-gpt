import React from 'react';
import { login } from '../../../services/users';

export const Login: React.FC = () => {
  const [loginField, setLoginField] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [token, setToken] = React.useState<string>();

  const handleLogin = async () => {
    if (!loginField || !password) return;

    const response = await login({
      login: loginField,
      password,
    });

    if (response) {
      window.alert(`Usuário logado com sucesso!`);
      setToken(response.Authorization);
      localStorage.setItem('token', response.Authorization);
      setLoginField('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>Login: </label>
      <input id="login" value={loginField} onChange={(e) => setLoginField(e.target.value)} />
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
      {token && <p>Token de acesso: {token}</p>}
    </div>
  );
};
