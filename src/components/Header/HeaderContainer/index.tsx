import React, { PropsWithChildren } from 'react';
import { PALETTE } from '../../../config/palette';

export const HeaderContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        alignItems: 'center',
        color: 'white',
        backgroundColor: PALETTE.primary,
        display: 'flex',
        fontWeight: 700,
        justifyContent: 'space-between',
        padding: '8px 32px',
        position: 'fixed',
        width: '100%',
      }}>
      {children}
    </div>
  );
};
