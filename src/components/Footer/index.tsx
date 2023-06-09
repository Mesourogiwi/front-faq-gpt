import React from 'react';
import { PALETTE } from '../../config/palette';

export const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: PALETTE.primary,
        bottom: '0',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px 32px',
        position: 'fixed',
        width: '100%',
      }}>
      <p style={{ color: 'white', fontWeight: 700 }}>Auxilium 2023 © Copyright</p>
    </div>
  );
};
