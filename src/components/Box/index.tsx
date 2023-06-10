import React, { PropsWithChildren } from 'react';

import { Container } from '../Container';

type Props = {
  title: string;
};

export const Box: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Container width="500px">
      <div
        style={{
          borderTopRightRadius: '26px',
          borderTopLeftRadius: '26px',
          backgroundColor: '#000000',
          color: 'white',
          padding: '16px 32px',
        }}>
        <p>{title}</p>
      </div>
      <div style={{ padding: '16px 32px' }}>{children}</div>
    </Container>
  );
};
