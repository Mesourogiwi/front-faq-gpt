import React from 'react';
import { HeaderContainer } from '../HeaderContainer';

type Props = {
  rightElement?: JSX.Element;
};

export const Header: React.FC<Props> = ({ rightElement }) => {
  return (
    <HeaderContainer>
      <p>Need Help?</p>
      {rightElement}
    </HeaderContainer>
  );
};
