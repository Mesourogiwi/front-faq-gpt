import * as React from 'react';
import { Header, CustomButton, Footer } from '../../../components';

import { useNavigate } from 'react-router-dom';
import SideMenu from './../components/sideMenu';
import * as S from './styles';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/user';

//para chegar nessa tela utilize: http://localhost:5173/admin/[nome da tela]
//exemplo: http://localhost:5173/admin/home
export default function Home() {
  const navigate = useNavigate();
  // const currentUser = useRecoilValue(currentUserState);

  // console.log(`currentUser`);
  // if (!currentUser) navigate('/sign-up');

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
          <h1> Home</h1>
          {/* Coloque o contudo da página aqui */}
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
