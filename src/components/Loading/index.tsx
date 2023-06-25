import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 3 }).map(() => (
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
          }}></span>
      ))}
    </div>
  );
};
