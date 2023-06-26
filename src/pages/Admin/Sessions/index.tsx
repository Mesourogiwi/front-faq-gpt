import { Header, CustomButton, Footer } from '../../../components';

import { useNavigate } from 'react-router-dom';
import SideMenu from './../components/sideMenu';
import * as S from './styles';
import SessionList from './SessionList';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/user';
//para chegar nessa tela utilize: http://localhost:5173/admin/sessions
export default function Sessions() {
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
        <SessionList />
        <Footer />
      </S.Container>
    </>
  );
}
