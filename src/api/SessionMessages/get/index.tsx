import React from 'react';
import axiosInstance from '../../../config/axios';

export const SessionMessages: React.FC = () => {
  const [sessionMessage, setSessionMessage] = React.useState([]);

  const fetchSessionMessages = async () => {
    try {
      const response = await axiosInstance({
        url: '/session-messages/',
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      if (response?.data) setSessionMessage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSessionMessages();
  }, []);

  return (
    <>
      <h1>Session Messages</h1>
      {sessionMessage.map((sessionMessage: any) => (
        <div key={sessionMessage?.id}>
          <h4>sessionMessage {sessionMessage?.id}</h4>
          <ul>
            <li>TimeStamp: {sessionMessage?.timestamp}</li>
            <li>IsUser: {sessionMessage?.isUser.toString()}</li>
            <li>Text: {sessionMessage?.text}</li>
            <li>Session Id: {sessionMessage?.session?.id}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
