import React from 'react';

import { sessionMessageResponse } from '../../types';

import * as S from './styles';

type Props = {
  messages: sessionMessageResponse[];
  messageWidth: string;
};

export const Messages: React.FC<Props> = ({ messages, messageWidth }) => {
  return (
    <>
      {messages.map((message) => {
        if (message.isUser) {
          return (
            <S.UserMessage key={message.id} width={messageWidth}>
              {message.text}
            </S.UserMessage>
          );
        } else
          return (
            <S.AutomaticMessage key={message.id} width={messageWidth}>
              {message.text}
            </S.AutomaticMessage>
          );
      })}
    </>
  );
};
