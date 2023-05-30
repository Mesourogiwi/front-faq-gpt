import React from 'react';
import axiosInstance from '../../config/axios';

export const SessionMessages: React.FC = () => {
  const [sessionMessage, setSessionMessage] = React.useState([]);

  const fetchSessionMessages = async () => {
    try {
      const response = await axiosInstance({
        url: '/session-messages/',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODU1NjYzODN9.Ohm-mVmOSnbeNhZvXRPqB0E8j05p3et430O6W9eVZQD-iNRQAb_ADbUeeQnqu2L02pOSG0UtO8ps8jhfeJg7cA',
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
            <li>IsUser: {sessionMessage?.isUser}</li>
            <li>Text: {sessionMessage?.text}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
