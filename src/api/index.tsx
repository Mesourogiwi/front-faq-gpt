import React from 'react';
import { Users } from './Users';
import { SessionMessages } from './SessionMessages';
import { Widgets } from './Widgets';

export const Api: React.FC = () => {
  return (
    <>
      <Users />
      <Widgets />
      <SessionMessages />
    </>
  );
};
