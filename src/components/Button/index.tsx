import React from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'text' | 'contained' | 'outlined';
  dark?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'contained',
  dark = false,
}) => {
  return (
    <MUIButton variant={variant} color={dark ? 'primary' : 'info'} onClick={onClick}>
      {text}
    </MUIButton>
  );
};
