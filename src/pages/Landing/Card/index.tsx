import React from 'react';
import { Container } from '../../../components';

type Props = {
  title: string;
  text: string;
};

export const Card: React.FC<Props> = ({ title, text }) => {
  return (
    <Container>
      <div
        style={{
          padding: '24px',
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
        <h1 style={{ fontSize: '32px' }}>{title}</h1>
        <p>{text}</p>
      </div>
    </Container>
  );
};
