import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { currentUserState } from '../../state/user';
import { CustomButton } from '../CustomButton';
import * as S from './styles';

type Props = {
  rightElement?: JSX.Element;
};

//adicionar enumeração para o que deve aparecer na direita
//exemplo: enum RightElement { signInSignUp, signOut, alreadyClient }

export const Header: React.FC<Props> = ({ rightElement }) => {
  const currentUser = useRecoilValue(currentUserState);
  const resetCurrentUser = useResetRecoilState(currentUserState);
  const navigate = useNavigate();

  const logout = () => {
    resetCurrentUser();
    localStorage.clear();
    navigate('/');
  };

  // console.log(currentUser)

  return (
    <S.HeaderContainer>
      {currentUser ? (
        <>
          <p>It's not a Widget</p>
          <S.LoggedUser>
            <p>{currentUser.name}</p>
            <CustomButton size="small" variant="outlined" text="Sign out" onClick={logout} />
          </S.LoggedUser>
        </>
      ) : (
        <>
          <p>Need Help?</p>
          {rightElement}
        </>
      )}
    </S.HeaderContainer>
  );
};
