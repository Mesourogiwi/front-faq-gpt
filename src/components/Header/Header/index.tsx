import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { currentUserState } from '../../../state/user';
import { Button } from '../../Button';
import { HeaderContainer } from '../HeaderContainer';

type Props = {
  rightElement?: JSX.Element;
};

export const Header: React.FC<Props> = ({ rightElement }) => {
  const currentUser = useRecoilValue(currentUserState);
  const resetCurrentUser = useResetRecoilState(currentUserState);
  const navigate = useNavigate();

  const logout = () => {
    resetCurrentUser();
    localStorage.clear();
    navigate('/');
  };

  return (
    <HeaderContainer>
      {currentUser ? (
        <>
          <p>It's not a Widget</p>
          <Button size="small" variant="outlined" text="Sign out" onClick={logout} />
        </>
      ) : (
        <>
          <p>Need Help?</p>
          {rightElement}
        </>
      )}
    </HeaderContainer>
  );
};
