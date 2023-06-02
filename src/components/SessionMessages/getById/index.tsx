import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../../config/axios';

export const SessionMessageById: FC = () => {
  const [sessionMessage, setSessionMessage] = useState<any>();
  const { id } = useParams();

  const getSessionMessage = async () => {
    try {
      const { data } = await axiosInstance({
        url: `/sessionMessages/${id}`,
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_BEARER_TOKEN,
        },
      });

      setSessionMessage(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSessionMessage();
  }, []);

  return (
    <>
      <h3>SessionMessage {id}</h3>
      <ul>
        <li>
          <span>Timestamp: {sessionMessage?.timestamp}</span>
        </li>
        <li>
          <span>isUser: {sessionMessage?.isUser.toString()}</span>
        </li>
        <li>
          <span>Texto: {sessionMessage?.text}</span>
        </li>
      </ul>
    </>
  );
};
