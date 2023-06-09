import React, { PropsWithChildren } from 'react';
import { PALETTE } from '../../config/palette';

type Props = {
  dark?: boolean;
  height?: string;
  width?: string;
};

export const Container: React.FC<PropsWithChildren<Props>> = ({
  dark = false,
  width = 'auto',
  height = 'auto',
  children,
}) => {
  return (
    <div
      style={{
        color: dark ? 'white' : PALETTE.primary,
        backgroundColor: dark ? PALETTE.primary : 'white',
        border: '3px solid black',
        borderRadius: '32px',
        width,
        height,
      }}>
      {children}
    </div>
  );
};
