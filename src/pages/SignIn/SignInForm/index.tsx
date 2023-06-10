import { TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PALETTE } from '../../../config/palette';
import { Button } from '../../../components';
import { login } from '../../../services/users';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    const response = await login({ login: email, password });
    if (response) {
      localStorage.setItem('token', response.Authorization);
      navigate('/user');
    } else {
      setErrorMessage("This user doesn't exist, try again!");
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setEmail(event.target.value);
        }}
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setErrorMessage('');
          setPassword(event.target.value);
        }}
        helperText={errorMessage}
      />
      <div
        style={{
          fontSize: '14px',
          textAlign: 'end',
        }}>
        <button
          onClick={() => navigate('/reset-password')}
          style={{
            backgroundColor: 'transparent',
            border: 0,
            color: PALETTE.secondary,
            cursor: 'pointer',
            textDecoration: 'underline',
          }}>
          Forgot your passsword?
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          dark
          size="small"
          variant="outlined"
          text="Want to be a client?"
          onClick={() => navigate('/sign-up')}
        />
        <Button dark size="large" text="Let's go" onClick={handleLogin} />
      </div>
    </div>
  );
};
