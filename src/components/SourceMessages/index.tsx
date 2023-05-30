import React from 'react';
import axiosInstance from '../../config/axios';

export const SourceMessages: React.FC = () => {
  const [sourceMessage, setSourceMessage] = React.useState([]);

  const fetchSourcesMessage = async () => {
    try {
      const response = await axiosInstance({
        url: '/source-messages/',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQZWRyb1BvdGVuemEiLCJleHAiOjE2ODU1NjYzODN9.Ohm-mVmOSnbeNhZvXRPqB0E8j05p3et430O6W9eVZQD-iNRQAb_ADbUeeQnqu2L02pOSG0UtO8ps8jhfeJg7cA',
        },
      });

      if (response?.data) setSourceMessage(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchSourcesMessage();
  }, []);

  return (
    <>
      <h1>Source Messages</h1>
      {sourceMessage.map((sourceMessage: any) => (
        <div key={sourceMessage?.id}>
          <h4>Source Messages {sourceMessage?.id}</h4>
          <ul>
            <li>TimeStamp: {sourceMessage?.timestamp}</li>
            <li>Text: {sourceMessage?.text}</li>
          </ul>
        </div>
      ))}
    </>
  );
};
