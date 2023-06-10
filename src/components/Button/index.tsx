import React from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  text: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  dark?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'medium',
  variant = 'contained',
  dark = false,
}) => {
  return (
    <MUIButton size={size} variant={variant} color={dark ? 'primary' : 'info'} onClick={onClick}>
      {text}
    </MUIButton>
  );
};
