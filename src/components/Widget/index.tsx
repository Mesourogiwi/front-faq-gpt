import React from 'react';
import { Fab, TextField } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';

import { chat } from '../../services/chat';
import { createSession, updateSession } from '../../services/session';
import { createSessionMessage } from '../../services/sessionMessage';
import { sessionMessageResponse } from '../../types';

import * as S from './styles';
import { Loading } from '../Loading';

type Props = {
  widgetId: number;
};

export const Widget: React.FC<Props> = ({ widgetId = 43 }) => {
  const [showChat, setShowChat] = React.useState(false);
  const [question, setQuestion] = React.useState<string | undefined>();
  const [sessionId, setSessionId] = React.useState<number | undefined>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState<sessionMessageResponse[]>([]);
  const fabRef = React.useRef<HTMLButtonElement>(null);

  const handleStartChat = async () => {
    setLoading(true);
    setShowChat(true);
    const response = await createSession({
      widgetId,
      startDate: new Date().toISOString().slice(0, 10),
    });
    if (!response) return;

    setSessionId(response.id);
    const message = await createSessionMessage({
      sessionId: response.id,
      timestamp: new Intl.DateTimeFormat('pt-Br', { timeStyle: 'medium' }).format(new Date()),
      isUser: false,
      text: 'Bem vindo ao atendimento automatizado, em que posso ajudar?',
    });

    if (message) setMessages([message]);
    setLoading(false);
  };

  const handleEndChat = async () => {
    setShowChat(false);
    setMessages([]);
    if (sessionId)
      await updateSession(sessionId, { endDate: new Date().toISOString().slice(0, 10) });
  };

  const handleSendQuestion = async () => {
    if (!sessionId || !question) return;
    setLoading(true);
    const text = question;
    setQuestion('');

    const sentMessage = await createSessionMessage({
      sessionId,
      timestamp: new Intl.DateTimeFormat('pt-Br', { timeStyle: 'medium' }).format(new Date()),
      isUser: true,
      text,
    });

    if (sentMessage) {
      const newMessages = [...messages, sentMessage];
      setMessages(newMessages);

      const receivedMessage = await chat({
        sessionId,
        question: text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
      });

      if (receivedMessage) setMessages([...newMessages, receivedMessage]);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        handleEndChat();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <S.WidgetIconBox>
        <Fab color="primary" onClick={showChat ? handleEndChat : handleStartChat}>
          <CommentOutlinedIcon />
        </Fab>
      </S.WidgetIconBox>
      {showChat && (
        <S.ChatBox ref={fabRef}>
          <S.ChatHeader>
            <p style={{ fontSize: '16px' }}>Suporte Automatizado</p>
            <p style={{ fontSize: '10px' }}>Escreva suas dúvidas</p>
          </S.ChatHeader>
          <S.ChatContent>
            {messages.map((message) => {
              if (message.isUser) {
                return <S.UserMessage key={message.id}>{message.text}</S.UserMessage>;
              } else
                return <S.AutomaticMessage key={message.id}>{message.text}</S.AutomaticMessage>;
            })}
            {loading && <Loading />}
          </S.ChatContent>
          <S.ChatFooter>
            <S.FooterBox>
              <TextField
                size="small"
                InputProps={{
                  style: {
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    fontSize: '14px',
                  },
                }}
                placeholder="Ex: Como mudar a senha?"
                value={question}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setQuestion(event.target.value);
                }}
              />
              <S.SendButton
                variant="contained"
                type="submit"
                onClick={handleSendQuestion}
                endIcon={<ArrowForwardIosIcon />}
              />
            </S.FooterBox>
            <S.FooterBox>
              <p>Not a human reply</p>
              <p>powered by It’s not a Widget.</p>
            </S.FooterBox>
          </S.ChatFooter>
        </S.ChatBox>
      )}
    </>
  );
};
