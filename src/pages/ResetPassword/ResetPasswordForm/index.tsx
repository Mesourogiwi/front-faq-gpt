import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../../../components';
import { getUserByLogin, updateUser } from '../../../services/users';
import { getRandomToken } from '../../../utils/getRandomToken';
import { userResponse } from '../../../types';
import { Input } from '../../../components/Input';

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = React.useState<string | undefined>();
  const [token, setToken] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [passwordConfirm, setPasswordConfirm] = React.useState<string | undefined>();
  const [generatedToken, setGeneratedToken] = React.useState<string | undefined>();
  const [errorMessageEmail, setErrorMessageEmail] = React.useState<string | undefined>();
  const [errorMessageToken, setErrorMessageToken] = React.useState<string | undefined>();
  const [errorMessagePassword, setErrorMessagePassword] = React.useState<string | undefined>();
  const [user, setUser] = React.useState<userResponse | undefined>();
  const [creatingNewPassword, setCreatingNewPassword] = React.useState(false);
  const navigate = useNavigate();

  const sendToken = async () => {
    if (!email) {
      setErrorMessageEmail('Your email is required');
      return;
    }

    const response = await getUserByLogin(email);

    if (response) {
      setUser(response);
      const token = getRandomToken();
      setGeneratedToken(token);
      setToken(token);
    } else {
      setErrorMessageEmail("There's no user with this email, try again!");
    }
  };

  const goToNewPassword = async () => {
    if (!token) {
      setErrorMessageToken('The token is required');
      return;
    }

    if (token !== generatedToken) {
      setErrorMessageToken('Wrong token, try again!');
      return;
    }

    setPassword('');
    setPasswordConfirm('');
    setCreatingNewPassword(true);
    setEmail('');
    setToken('');
  };

  const update = async () => {
    if (!user) return;

    if (!password || !passwordConfirm) {
      setErrorMessagePassword('All fields are required');
      return;
    }

    if (password !== passwordConfirm) {
      setErrorMessagePassword("The passwords don't match");
      return;
    }

    const response = await updateUser(user.id, { login: user.login, name: user.name, password });

    if (response) {
      navigate('/sign-in');
    } else {
      setErrorMessagePassword('Something went wrong, try again!');
    }

    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px 0' }}>
      {!creatingNewPassword ? (
        <>
          <Input
            fullWidth
            disableUnderline={true}
            placeholder="Email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setErrorMessageEmail('');
              setEmail(event.target.value);
            }}
          />
          {errorMessageEmail && <p style={{ fontSize: '14px' }}>{errorMessageEmail}</p>}
          <CustomButton dark variant="outlined" text="Send a token" onClick={sendToken} />
          <Input
            disableUnderline={true}
            fullWidth
            placeholder="Valid token"
            value={token}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setToken(event.target.value);
            }}
          />
          {errorMessageToken && <p style={{ fontSize: '14px' }}>{errorMessageToken}</p>}
        </>
      ) : (
        <>
          <Input
            fullWidth
            disableUnderline={true}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setErrorMessagePassword('');
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
              setErrorMessagePassword('');
              setPasswordConfirm(event.target.value);
            }}
          />
          {errorMessagePassword && <p style={{ fontSize: '14px' }}>{errorMessagePassword}</p>}
        </>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomButton
          dark
          size="small"
          variant="outlined"
          text="Back to login"
          onClick={() => navigate('/sign-in')}
        />
        <CustomButton
          dark
          size="large"
          text={creatingNewPassword ? 'Change Password' : 'Create new Password'}
          onClick={creatingNewPassword ? update : goToNewPassword}
        />
      </div>
    </div>
  );
};
