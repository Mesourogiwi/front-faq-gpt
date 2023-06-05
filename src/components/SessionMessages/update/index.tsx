import React from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const SessionMessageUpdate: React.FC = () => {
  const [timestamp, setTimestamp] = React.useState<string>();
  const [text, setText] = React.useState<string>();
  const [isUser, setIsUser] = React.useState<boolean>();
  const [sessionId, setSessionId] = React.useState<number>();
  const { id } = useParams();
  
  const updateSessionMessage = async () => {
    try {
      const response = await axiosInstance({
        url: `/session-messages/${id}`,
        method: 'PUT',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
        data: {
          timestamp,
          text,
          isUser,
          session: {
            id: sessionId
          }
        },
      });

      if (response?.data) {
        window.alert(`SessionMessage ${response.data.id} editado com sucesso!`);
        setTimestamp('');
        setIsUser(false);
        setText('');
		setSessionId(0);
      }
    } catch (err) {
      console.log(err);
    }
  };  
  
  const getSessionMessage = async () => {
    try {
      const { data } = await axiosInstance({
        url: `/session-messages/${id}`,
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      setTimestamp(data.timestamp);
      setText(data.text);
      setIsUser(data.isUser);
      setSessionId(data.session.id);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getSessionMessage();
  }, []);

  return (
    <div>
      <h1>Criar SessionMessage</h1>
      <label>Timestamp: </label>
      <input id="timestamp" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
      <br />
      <br />
      <label>Texto: </label>
      <input id="text" value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <label>É Usuário: </label>
      <input id="isUser" type="checkbox" checked={isUser} onChange={(e) => setIsUser(e.target.checked)} />
      <br />
      <br />
      <label>Session Id: </label>
      <input id="sessionId" type="number" value={sessionId} onChange={(e) => setSessionId(e.target.valueAsNumber)} />
      <br />
      <br />
      <button onClick={updateSessionMessage}>Atualizar</button>
    </div>
  );
};