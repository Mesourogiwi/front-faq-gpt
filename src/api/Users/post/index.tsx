import React from 'react';
import { createUser } from '../../../services/users';

export const UserCreate: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [login, setLogin] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const handleCreateUser = async () => {
    if (!name || !password || !login) return;

    const response = await createUser({
      name,
      login,
      password,
    });

    if (response) {
      window.alert(`Usuário ${response.id} criado com sucesso!`);
      setName('');
      setLogin('');
      setPassword('');
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
      <button onClick={handleCreateUser}>Cadastrar</button>
    </div>
  );
};
