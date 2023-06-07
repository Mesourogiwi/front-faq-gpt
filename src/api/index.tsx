import React from 'react';
import { Users } from './Users';
import { SessionMessages } from './SessionMessages';

export const Api: React.FC = () => {
  return (
    <>
      <Users />
      <SessionMessages />
    </>
  );
};
