import React from 'react';
import { useParams } from 'react-router';
import { getUser, updateUser } from '../../../services/users';

export const UserEdit: React.FC = () => {
  const [name, setName] = React.useState<string>();
  const [login, setLogin] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await getUser(Number(id));
    if (response) {
      setName(response.name);
      setLogin(response.login);
    }
  };

  const editUser = async () => {
    if (!name || !login || !password) return;

    const response = await updateUser(Number(id), {
      name,
      login,
      password,
    });

    if (response) {
      window.alert(`Usuário ${response.id} editado com sucesso!`);
      setName(response.name);
      setLogin(response.login);
      setPassword('');
    }
  };

  React.useEffect(() => {
    fetchUser();
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
