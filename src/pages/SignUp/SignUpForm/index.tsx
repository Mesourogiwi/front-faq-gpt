import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../../../components';
import { createUser } from '../../../services/users';
import { Input } from '../../../components/Input';

export const SignUpForm: React.FC = () => {
  const [name, setName] = React.useState<string | undefined>();
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [passwordConfirm, setPasswordConfirm] = React.useState<string | undefined>();
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password || !passwordConfirm) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessage("The passwords don't match");
      return;
    }

    const response = await createUser({ name, login: email, password });
    if (response) {
      navigate('/sign-in');
    } else {
      setErrorMessage('Something went wrong, try again!');
    }

    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
      <Input
        fullWidth
        disableUnderline={true}
        placeholder="Name"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setName(event.target.value);
        }}
      />
      <Input
        fullWidth
        disableUnderline={true}
        placeholder="Email"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setEmail(event.target.value);
        }}
      />
      <Input
        fullWidth
        disableUnderline={true}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setPassword(event.target.value);
        }}
      />
      <Input
        fullWidth
        disableUnderline={true}
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setPasswordConfirm(event.target.value);
        }}
      />
      {errorMessage && <p style={{ fontSize: '14px' }}>{errorMessage}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomButton
          dark
          size="small"
          variant="outlined"
          text="Already a client?"
          onClick={() => navigate('/sign-in')}
        />
        <CustomButton dark size="large" text="Let's go" onClick={handleSignUp} />
      </div>
    </div>
  );
};
