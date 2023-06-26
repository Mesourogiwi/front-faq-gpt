import * as React from 'react';
import { Header, CustomButton, Footer, Container } from '../../../components';

import { useNavigate } from 'react-router-dom';
import SideMenu from './../components/sideMenu';
import * as S from './styles';
import { currentUserState } from '../../../state/user';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

//para chegar nessa tela utilize: http://localhost:5173/admin/user
export default function User() {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(currentUserState);

  useEffect(() => {
    if (!currentUser) navigate('/sign-in');
  }, []);

  return (
    <>
      <Header
        rightElement={
          <div style={{ display: 'flex', gap: '16px' }}>
            <CustomButton onClick={() => navigate('/sign-up')} variant="text" text="Sign Up" />
            <CustomButton onClick={() => navigate('/sign-in')} variant="outlined" text="Sign In" />
          </div>
        }
      />

      <S.Container>
        <SideMenu />
        <S.RightContainer>
          <h1> User</h1>
          {
            <div
              style={{
                paddingTop: '55px',
              }}>
              <Container width="30lh" height="8lh">
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    gap: '10px',
                  }}>
                  <p>
                    <b>{'Name: '}</b>
                    {currentUser?.name}
                  </p>
                  <p>
                    <b>{'Login: '}</b>
                    {currentUser?.login}
                  </p>
                  <CustomButton
                    dark
                    size="small"
                    variant="outlined"
                    text="Change Password"
                    onClick={() => {
                      navigate('/reset-password');
                    }}
                  />
                </div>
              </Container>
            </div>
          }
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
