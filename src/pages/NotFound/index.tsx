import * as React from 'react';
import { Header, CustomButton, Footer } from '../../components';

import { useNavigate } from 'react-router-dom';
import * as S from './styles';

//para chegar nessa tela utilize: http://localhost:5173/admin/[nome da tela]
//exemplo: http://localhost:5173/admin/home
export default function NotFound() {
  const navigate = useNavigate();

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
        <S.RightContainer>
          <h1> 404 Not Found</h1>
          {/* Coloque o contudo da página aqui */}
        </S.RightContainer>
        <Footer />
      </S.Container>
    </>
  );
}
