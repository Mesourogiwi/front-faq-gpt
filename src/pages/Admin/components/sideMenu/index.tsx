import * as React from 'react';
import Button from '@mui/material/Button';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <h1> Side Menu</h1>
      </S.Container>
    </>
  );
}
