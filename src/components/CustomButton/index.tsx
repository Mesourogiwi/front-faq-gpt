import React from 'react';
import { Button } from './styles';

type ButtonProps = {
  text: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  dark?: boolean;
};

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  size = 'medium',
  variant = 'contained',
  dark = false,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      color={dark ? 'primary' : 'info'}
      style={{ border: `2px solid ${dark ? 'info' : 'primary'}` }}
      onClick={onClick}>
      {text}
    </Button>
  );
};
