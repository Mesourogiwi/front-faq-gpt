import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { PALETTE } from '../../../config/palette';
import { CustomButton } from '../../../components';
import { login } from '../../../services/users';
import { currentUserState } from '../../../state/user';

import { Input } from '../../../components/Input';

export const SignInForm: React.FC = () => {
  const [email, setEmail] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();
  const setCurrentUser = useSetRecoilState(currentUserState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('All fields are required');
      return;
    }

    const response = await login({ login: email, password });
    if (response) {
      localStorage.setItem('token', response.Authorization);
      setCurrentUser(response);
      navigate('/admin/home');
    } else {
      setErrorMessage("This user doesn't exist, try again!");
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
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
      <div
        style={{
          fontSize: '14px',
          display: 'flex',
          justifyContent: errorMessage ? 'space-between' : 'flex-end',
        }}>
        {errorMessage && <p>{errorMessage}</p>}
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
        <CustomButton
          dark
          size="small"
          variant="outlined"
          text="Want to be a client?"
          onClick={() => navigate('/sign-up')}
        />
        <CustomButton dark size="large" text="Let's go" onClick={handleLogin} />
      </div>
    </div>
  );
};
