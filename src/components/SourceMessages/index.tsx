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
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg1MzA4NTM1fQ.UMMu8LwGNgDTp4cTXg7w1viQ-eWezV5QkiR4x_2w91b-z0aCR5yi1cJRrCmWuY4Cie1BUKE2G7ILYfcqLbAJ4w',
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
