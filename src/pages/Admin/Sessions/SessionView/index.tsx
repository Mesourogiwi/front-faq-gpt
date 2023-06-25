import React from 'react';
import { sessionResponse } from '../../../../types/session';

type SessionViewProps = {
  sessionId: number;
  sessions: sessionResponse[];
};

const SessionView: React.FC<SessionViewProps> = ({ sessionId, sessions }) => {
  // Filtrar a sessão com base no ID selecionado
  const session = sessions.find((session) => session.id === sessionId);

  return (
    <div style={{ display: 'flex', float: 'right' }}>
      <h2>#{session?.id}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        {/* Exibir as sessionMessages da sessão selecionada */}
        {session?.sessionMessages
          .sort((a, b) => a.id - b.id) // Ordenar as mensagens por ID em ordem crescente
          .map((message) => (
            <div
              key={message.id}
              style={{
                backgroundColor: '#e9e9e9',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '8px',
                maxWidth: '70%',
              }}
            >
              <p>{message.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SessionView;